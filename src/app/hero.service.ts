import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Hero[] = HEROES;

  getHeros(): Hero[] {
    return this.heroes;
  }

  constructor() {}
}
