import { Component, OnInit } from '@angular/core';
import { HERO } from '../HERO';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero:HERO={
    id:1,
    name:'Windstorm'
     };
  constructor() { }

  ngOnInit(): void {
  }

}
