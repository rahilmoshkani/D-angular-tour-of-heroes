import { HERO } from './hero';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';


import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getheroes():Observable<HERO[]>{
    const heroes=of(HEROES);
    return heroes;
    
  }

  constructor() { }
}
