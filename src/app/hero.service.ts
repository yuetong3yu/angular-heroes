import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
import { HEROES } from './mock-hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes?: Observable<Hero[]>;
  private baseURL: string = 'api/heroes';

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((i) => i.id === id)!;
    this.log(`get ${hero.name}`);
    return of(hero);
  }

  getHeros(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.log('fetch heroes.');
    return heroes;
  }

  private log(message: string) {
    this.messageService.add(`HeroService: 🆕 ${message}`);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
}
