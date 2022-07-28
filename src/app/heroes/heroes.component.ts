import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedhero?: Hero = undefined;

  getHeroes(): void {
    this.heroService.getHeros().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelectHero(hero: Hero) {
    this.selectedhero = hero;
  }

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
}
