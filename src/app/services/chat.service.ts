import { Injectable } from '@angular/core';
import { collectionData, Firestore, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Chat } from '../interfaces/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private _collection = collection(this.firestore, 'chats');
  readonly chats$: Observable<Chat[]> = collectionData(
    this._collection
  ) as Observable<Chat[]>;

  constructor(private firestore: Firestore) {}
}
