import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from '@angular/fire/auth';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userSubject = new BehaviorSubject<User | null>(null);
  readonly user$ = this._userSubject.asObservable();

  private _isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  readonly isAuthenticated$ = this._isAuthenticatedSubject.asObservable();

  constructor(private auth: Auth) {}

  async login() {
    try {
      const signInResult = await signInWithPopup(
        this.auth,
        new GoogleAuthProvider()
      );
      this._userSubject.next(signInResult?.user);
      this._isAuthenticatedSubject.next(!signInResult.user.isAnonymous);

      console.log({ signInResult });
    } catch (error) {
      console.log({ error });
    }
  }

  logout() {
    this.auth.signOut();
    this._userSubject.next(null);
    this._isAuthenticatedSubject.next(false);
  }
}
