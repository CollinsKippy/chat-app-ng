import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

type Chat = {
  id: string;
  message: string;
  createdAt: Date;
};

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent {
  chats: Chat[] = [
    { id: '1', message: 'Hi there, John!', createdAt: new Date() },
    { id: '2', message: 'Hi there, Jill!', createdAt: new Date() },
    { id: '3', message: 'Hi there, Max!', createdAt: new Date() },
  ];
}
