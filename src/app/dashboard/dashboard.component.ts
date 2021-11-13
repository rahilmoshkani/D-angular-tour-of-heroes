import { HeroService } from './../hero.service';
import { HERO } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes:HERO[]=[];

  constructor(private heroservice:HeroService) { }

  ngOnInit(){
    this.getHeroes();
  }
  getHeroes():void{
    this.heroservice.getheroes()
    .subscribe(heroes=>this.heroes=heroes.slice(1,5));
  }

}
