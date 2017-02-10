import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Restaurant } from './restaurants.interface';

let restaurants : Restaurant[] = [
      { name : 'Tortue Génial', note : 3},
      { name : 'Aux Yeux Bridés', note : 9},
      { name : 'La Mafia', note : 7.3},
      { name : 'Les Grincheux', note : 1},
      { name : 'Jean&Co', note : 2.5}
    ];

@Injectable ()
export class RestaurantsService {
    subject = new BehaviorSubject<Restaurant[]>(restaurants);
    changes = this.subject
            .asObservable();

    constructor(public http: Http) {}

    addRestaurant(restau: Restaurant) {
        
    }

}