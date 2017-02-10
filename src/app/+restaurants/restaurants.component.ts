import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';

import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurants.interface';

@Component({
  selector: 'app-restaurants',
  templateUrl: 'restaurants.component.html',
  styles: ['./restaurants.css'],
  providers: [RestaurantsService]
})

export class RestaurantsComponent implements OnInit {
  
  restaurants : Observable<Restaurant[]>;

  constructor(private $restauService: RestaurantsService) {}
  
  ngOnInit() {
     this.restaurants = this.$restauService.changes;
  }

}