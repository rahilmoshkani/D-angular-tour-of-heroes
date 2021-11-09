import { HERO } from './../hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
 
 selectedHero?:HERO;

 heroes:HERO[]=[];


  onSelected(hero:HERO):void{
    this.selectedHero=hero;
    this.messageService.add(`HeroesComponent:Selected hero id=${hero.id}`);
  }

  constructor(private heroservice:HeroService,private messageService:MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes():void{
    this.heroservice.getheroes()
    .subscribe(heroes=>this.heroes=heroes);
  }

}
