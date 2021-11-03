import { Component, OnInit } from '@angular/core';
import { HERO } from '../HERO';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes=HEROES;
  selectedHero?:HERO;
  onSelected(hero:HERO):void{
    this.selectedHero=hero;
  }

  hero:HERO={
    id:1,
    name:'windstrom'
  };


  constructor() { }

  ngOnInit(): void {
  }

}
