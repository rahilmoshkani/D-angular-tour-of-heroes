
import { HERO } from './hero';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';


import { from, Observable,of } from 'rxjs';
import { MessageService } from './message.service';
import {HttpClient,HttpHeaders} from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageservice:MessageService,private http:HttpClient) { }

  getheroes():Observable<HERO[]>{
    const heroes=of(HEROES);
    this.messageservice.add('HeroService:fetched heroes');
    return heroes;
    
  }
  getHero(id:number):Observable<HERO>{
  const hero=HEROES.find(h=>h.id===id)!;
  this.messageservice.add(`HeroService:fetched hero id=${id}`);
  return of(hero);

  }

  private log(message:string){
    this.messageservice.add(`HeroService:${message}`);
  }
  
private heroesUrl='api/heroes';//url to web api 

}
