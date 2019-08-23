import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Spider-Man', description: "As a result of a radioactive spider bite, high schooler Peter Parker developed powers and abilities similar to that of a spider." },
      { id: 12, name: 'Thanos', description: "Thanos was a genocidal warlord from Titan, whose own main objective was to bring stability to the universe, as he believed its massive population would inevitably use up the universe's entire supply of resources and condemn it."  },
      { id: 13, name: 'Iron Man', description: "Anthony Edward 'Tony' Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries." },
      { id: 14, name: 'Captain America', description: "Captain Steven Grant 'Steve' Rogers is a World War II veteran, a founding member of the Avengers, and Earth's first superhero." },
      { id: 15, name: 'Black Widow', description: "Natalia Alianovna 'Natasha' Romanoff, also known as Black Widow, was one of the most talented spies and assassins in the entire world and a founding member of the Avengers. " },
      { id: 16, name: 'Deadpool', description: "Wade Wilson was an international assassin who had worked for various governments when he developed an aggressive cancer."},
      { id: 17, name: 'Hulk', description: "Robert Bruce Banner, M.D., Ph.D., is a renowned scientist and a founding member of the Avengers." },
      { id: 18, name: 'Thor', description: "Thor Odinson is the Asgardian God of Thunder, the former king of Asgard and New Asgard, and a founding member of the Avengers." },
      { id: 19, name: 'Hawkeye', description: "Clinton Francis 'Clint' Barton, also known as Hawkeye, is a skilled marksman, a former special agent of S.H.I.E.L.D. and one of the founding members of the Avengers." },
      { id: 20, name: 'Wolverine', description: "With a past shrouded in mystery, Wolverine's memories are full of government secrets, traumatic events, and death." }
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