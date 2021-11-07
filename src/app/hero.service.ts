import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { HERO } from './HERO';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getheroes():HERO[]{
    return HEROES;
  }

  constructor() { }
}
