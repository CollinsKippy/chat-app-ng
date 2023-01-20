import { Pipe, PipeTransform } from '@angular/core';
import { FieldValue, Timestamp } from '@angular/fire/firestore';
import { FirebaseTimestamp } from '../interfaces/firebase-timestamp';

@Pipe({
  name: 'firebaseTimestamp',
  standalone: true,
})
export class FirebaseTimestampPipe implements PipeTransform {
  transform(value: any): string {
    return new Date(value?.seconds)?.toJSON();
  }
}
