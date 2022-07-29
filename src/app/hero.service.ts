import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes?: Observable<Hero[]>;

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((i) => i.id === id)!;
    this.messageService.add(`Hero Service: 🔋 Get ${hero.name}.`);
    return of(hero);
  }

  getHeros(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.heroes = heroes;

    this.messageService.add('Hero Service: 🔋 fetch heroes.');
    return heroes;
  }

  constructor(private messageService: MessageService) {}
}
