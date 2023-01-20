import { Pipe, PipeTransform } from '@angular/core';
import { FirebaseTimestamp } from '../interfaces/firebase-timestamp';

@Pipe({
  name: 'firebaseTimestamp',
  standalone: true,
})
export class FirebaseTimestampPipe implements PipeTransform {
  transform(value: FirebaseTimestamp): string {
    return new Date(value?.seconds * 1000).toJSON();
  }
}
