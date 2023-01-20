import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User | any> | undefined;

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  readonly isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private auth: Auth) {}

  async login() {
    try {
      const signInResult = await signInWithPopup(
        this.auth,
        new GoogleAuthProvider()
      );
      this.user$ = of(signInResult?.user);
      this.isAuthenticatedSubject.next(!signInResult.user.isAnonymous);

      console.log({ signInResult });
    } catch (error) {
      console.log({ error });
    }
  }

  logout() {
    this.auth.signOut();
    this.user$ = of(null);
    this.isAuthenticatedSubject.next(false);
  }
}
