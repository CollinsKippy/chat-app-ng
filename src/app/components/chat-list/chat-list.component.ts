import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Chat } from 'src/app/interfaces/chat';
import { FirebaseTimestampPipe } from 'src/app/pipes/firebase-timestamp.pipe';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, FirebaseTimestampPipe],
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent {
  @Input() chats: Chat[] | null = [];
}
