import { FieldValue, Timestamp } from '@angular/fire/firestore';
import { FirebaseTimestamp } from './firebase-timestamp';

export interface Chat {
  id?: string;
  message: string | null | undefined;
  createdAt: any;
  userId: string;
  displayName: string | null;
}
