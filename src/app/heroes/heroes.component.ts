import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES;
  selectedhero?: Hero = undefined;

  onSelectHero(hero: Hero) {
    this.selectedhero = hero;
  }

  constructor() {}

  ngOnInit(): void {}
}
