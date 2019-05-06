import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-data';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    name: 'Spiderman',
    id: 1
  }
  selectedHero: Hero;

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero) {
    this.selectedHero = hero;
  }

}
