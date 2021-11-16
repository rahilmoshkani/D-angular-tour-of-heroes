
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

  /**POST:add a new hero to the server */
  addHero(hero:HERO):Observable<HERO>{
    return this.http.post<HERO>(this.heroesUrl,hero,this.httpOptions)
    .pipe(
      tap((newHero:HERO)=>this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<HERO>('addHero'))
    );
  }

  /**PUT:update the hero on the server */
  updateHero(hero:HERO):Observable<any>{
    return this.http.put(this.heroesUrl,hero, this.httpOptions)
    .pipe(
      tap(_=>this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  httpOptions={
    headers:new HttpHeaders({'content-type':'application/json'})
  }

/*GET heroes from the server*/
  getheroes():Observable<HERO[]>{
    return this.http.get<HERO[]>(this.heroesUrl)
    .pipe(
      tap(_=>this.log('fetched heroes')),
      catchError(this.handleError<HERO[]>('getheroes',[]))
    );
    
  }
  /*GET hero by id. will 404 if id not found*/
  getHero(id:number):Observable<HERO>{
  const url=`${this.heroesUrl}/${id}`;
  return this.http.get<HERO>(url).pipe(
    tap(_=>this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<HERO>(`getHero id=${id}`))
  );

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