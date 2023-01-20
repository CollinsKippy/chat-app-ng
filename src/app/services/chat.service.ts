import { Injectable } from '@angular/core';
import {
  collectionData,
  Firestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Chat } from '../interfaces/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private _collectionRef = collection(this.firestore, 'chats');
  private _chatsQuery = query(
    this._collectionRef,
    orderBy('createdAt'),
    limit(10)
  );
  readonly chats$: Observable<Chat[]> = collectionData(
    this._chatsQuery
  ) as Observable<Chat[]>;

  constructor(private firestore: Firestore) {}

  async addMessage(chat: Chat) {
    try {
      const createdChat = await addDoc(this._collectionRef, chat);
      console.log({ createdChat });
    } catch (error) {
      console.log({ error });
    }
  }
}
