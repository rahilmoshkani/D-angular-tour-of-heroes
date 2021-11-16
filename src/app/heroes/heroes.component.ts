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
delete(hero:HERO):void{
  this.heroes=this.heroes.filter(h=>h !==hero);
  this.heroservice.deleteHero(hero.id).subscribe();
}

  add(name:string):void{
    name=name.trim();
    if(!name){return;}
    this.heroservice.addHero({name} as HERO)
    .subscribe(hero=>{
      this.heroes.push(hero);
    });
  }
 
 heroes:HERO[]=[];

  constructor(private heroservice:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes():void{
    this.heroservice.getheroes()
    .subscribe(heroes=>this.heroes=heroes);
  }

}
