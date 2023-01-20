import { FirebaseTimestamp } from './firebase-timestamp';

export interface Chat {
  id: string;
  message: string;
  createdAt: FirebaseTimestamp;
}
