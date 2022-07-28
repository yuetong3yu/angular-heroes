import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedhero?: Hero = undefined;

  getHeroes(): void {
    this.heroService.getHeros().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  onSelectHero(hero: Hero) {
    this.selectedhero = hero;
    this.messageService.add(`Hero Service: 🌍 User Select ${hero.name}`);
  }

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }
}
