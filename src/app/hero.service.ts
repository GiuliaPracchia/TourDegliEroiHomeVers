import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Observable, of}from 'rxjs';
import {Hero} from './Hero';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

getHeroes(): Observable<Hero[]>{
  this.messageService.add('HeroService : eroi recuperati');
  return of (HEROES);
}
  constructor(private messageService :MessageService) { }
}
