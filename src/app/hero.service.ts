import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Hero[] = HEROES;

  getHeros(): Observable<Hero[]> {
    return of(HEROES);
  }

  constructor() {}
}
