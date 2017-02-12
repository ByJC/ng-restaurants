import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/distinctUntilChanged';

import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from '../restaurants.interface';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.sass'],
  providers: [RestaurantsService]
})
export class RestaurantComponent implements OnInit {

  restaurant: Observable<Restaurant>;

  constructor(private route: ActivatedRoute, private _restauService: RestaurantsService) { }

  ngOnInit() {
   this.restaurant = this.route.params.distinctUntilChanged().mergeMap(params => { 
    return this._restauService.changes.map(restaurants => restaurants.filter(restau => restau.id == params['id'])[0]);
   });
  }

}
