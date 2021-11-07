import { Component, OnInit } from '@angular/core';
import { HERO } from '../HERO';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes:HERO[]=[];
  selectedHero?:HERO;
  onSelected(hero:HERO):void{
    this.selectedHero=hero;
  }

  hero:HERO={
    id:1,
    name:'windstrom'
  };


  constructor(private heroservice:HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes():void{
    this.heroes=this.heroservice.getheroes();
  }

}
