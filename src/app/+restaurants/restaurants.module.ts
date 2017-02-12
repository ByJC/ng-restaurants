import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RestaurantsRoutingModule } from './restaurants.routing';
import { RestaurantsComponent }   from './restaurants.component';

import { RestaurantComponent } from './restaurant/restaurant.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RestaurantsRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule
  ],
  exports: [],
  declarations: [RestaurantsComponent, RestaurantComponent],
  providers: [],
})
export class RestaurantsModule { }
