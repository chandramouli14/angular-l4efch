import { Injectable } from '@angular/core';
import { Hero } from './Hero';

@Injectable()
export class HeroService {
  heroes:Hero[]=[{name:"mouli",id:3},{name:"chandu",id:4},{name:"kanta",id:5}]
  constructor() { }
  getHeroes()
  {
    return this.heroes;
  }
  


}