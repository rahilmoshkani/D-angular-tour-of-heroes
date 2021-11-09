import { HERO } from './hero';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';


import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getheroes():Observable<HERO[]>{
    const heroes=of(HEROES);
    this.messageservice.add('HeroService:fetched heroes');
    return heroes;
    
  }

  constructor(private messageservice:MessageService) { }
}
