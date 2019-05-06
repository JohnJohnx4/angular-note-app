import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Captain America' },
      { id: 12, name: 'Wolverine' },
      { id: 13, name: 'Rogue' },
      { id: 14, name: 'Cyclops' },
      { id: 15, name: 'The Hulk' },
      { id: 16, name: 'The Punisher' },
      { id: 17, name: 'Daredevil' },
      { id: 18, name: 'Deadpool' },
      { id: 19, name: 'Storm' },
      { id: 20, name: 'Thor' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
