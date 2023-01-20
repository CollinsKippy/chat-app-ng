import { Injectable } from '@angular/core';
import {
  collectionData,
  Firestore,
  collection,
  addDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Chat } from '../interfaces/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private _collectionRef = collection(this.firestore, 'chats');
  readonly chats$: Observable<Chat[]> = collectionData(
    this._collectionRef
  ) as Observable<Chat[]>;

  constructor(private firestore: Firestore) {}

  async addMessage(chat: Chat) {
    const createdChat = await addDoc(this._collectionRef, chat);
    console.log({ createdChat });
  }
}
