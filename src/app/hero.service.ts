
import { HERO } from './hero';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';


import { Observable, of, observable } from 'rxjs';
import { MessageService } from './message.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageservice:MessageService,private http:HttpClient) { }

/*GET heroes from the server*/
  getheroes():Observable<HERO[]>{
    return this.http.get<HERO[]>(this.heroesUrl)
    .pipe(
      tap(_=>this.log('fetched heroes')),
      catchError(this.handleError<HERO[]>('getheroes',[]))
    );
    
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

/**
 * Handle Http operation that failed.
 * let the app continue.
 * @param operation - name of the operation that failed
 * @param result-optional value to return as the observable result
 */
private handleError<T>(operation='operation',result?:T){
  return (error:any):Observable<T>=>{

  //TODO:send the error to remote logging infrastructure
  console.error(error);//log to console instead

  //TODO:better job of transforming error for user consumption
  this.log(`${operation} failed:${error.message}`);
  
  //Let the app keep running by returning an empty result.
  return of (result as T);
};
}
}