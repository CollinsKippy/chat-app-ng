import { FieldValue, Timestamp } from '@angular/fire/firestore';
import { FirebaseTimestamp } from './firebase-timestamp';

export interface Chat {
  id?: string;
  message: string;
  createdAt: () => FieldValue;
  userId: string;
  displayName: string | null;
}
