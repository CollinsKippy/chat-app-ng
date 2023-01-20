import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from './interfaces/chat';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Chat App Basic';

  chats$: Observable<Chat[]> | undefined = this.chatService.chats$;

  constructor(private chatService: ChatService) {}
}
