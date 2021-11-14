import { HeroService } from './../hero.service';
import { Component, OnInit,Input } from '@angular/core';
import { HERO } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input()hero?:HERO;

  constructor(
    private route:ActivatedRoute,
    private heroservice:HeroService,
    private location:Location
  ) { }

  ngOnInit(): void {
  }

}
