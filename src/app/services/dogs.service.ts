import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // OPTIONAL: Observables value-add
import { Dog } from '../models/dog'; // OPTIONAL: Observables value-add.
import DOGS from '../dogdata.json';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private dogData: Dog[] = DOGS;

  constructor() {
    const likes = localStorage.getItem('likes');
    if (!likes) {
      localStorage.setItem('likes', JSON.stringify({}));
    }
  }

  all(): Observable<Dog[]> {
    return of(this.dogData);
  }

  get(dogId: string): Dog {
    return this.dogData.filter(dog => dog.id === dogId)[0];
  }

  getLikes(dogId): Observable<number> {
    const likes = JSON.parse(localStorage.getItem('likes'));
    if (likes[dogId]) {
      // tslint:disable-next-line:radix
      return of(parseInt(likes[dogId]));
    }
    return of(0);
  }

  update(dog): void {
    const likes = JSON.parse(localStorage.getItem('likes')) || localStorage.setItem('likes', JSON.stringify({}));
    likes[dog.id] = dog.likes;
    localStorage.setItem('likes', JSON.stringify(likes));
  }
}
