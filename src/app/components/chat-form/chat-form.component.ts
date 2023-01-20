import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { User } from '@angular/fire/auth';
import { addDoc, serverTimestamp, Timestamp } from '@angular/fire/firestore';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss'],
})
export class ChatFormComponent implements OnInit, OnDestroy {
  chatForm = new FormGroup({
    message: new FormControl('', {
      validators: [Validators.required, Validators.minLength(2)],
      asyncValidators: [],
    }),
  });

  authSub: Subscription | undefined;

  constructor(
    public authService: AuthService,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.authSub = this.authService.isAuthenticated$?.subscribe(
      (isAuthenticated) => {
        console.log({ isAuthenticated });
        isAuthenticated ? this.chatForm?.enable() : this.chatForm?.disable();
      }
    );
  }

  onSubmit(user: User) {
    const message = this.chatForm.value as string;
    console.log({ user });

    this.chatService.addMessage({
      message: message,
      createdAt: serverTimestamp,
      userId: user.uid,
      displayName: user.displayName,
    });
  }

  ngOnDestroy(): void {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }

  // getters

  get message() {
    return this.chatForm.get('message');
  }
}
