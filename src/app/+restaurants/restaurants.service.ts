import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Restaurant } from './restaurants.interface';

let restaurants : Restaurant[] = [
      { id:1, name : 'Tortue Génial', note : 3},
      { id:2, name : 'Aux Yeux Bridés', note : 9},
      { id:3, name : 'La Mafia', note : 7.3},
      { id:4, name : 'Les Grincheux', note : 1},
      { id:5, name : 'Jean&Co', note : 2.5}
    ];

@Injectable ()
export class RestaurantsService {
    subject = new BehaviorSubject<Restaurant[]>(restaurants);
    changes = this.subject
            .asObservable();

    constructor(public http: Http) {}

    addRestaurant(restau: Restaurant) {
        
    }

    get(id) {
        return restaurants.filter(restau => restau.id === id)[0];
    }

}