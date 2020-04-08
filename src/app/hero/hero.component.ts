import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes:Hero[]
  selectedHero:Hero;
  constructor(private heroservice:HeroService) { }

  ngOnInit() {
    this.heroes=this.heroservice.getHeroes()
  }
  select(hero)
  {
    this.selectedHero=hero;
  }

}