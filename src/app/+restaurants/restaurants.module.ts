import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RestaurantsRoutingModule } from './restaurants.routing';
import { RestaurantsComponent }   from './restaurants.component';


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
  declarations: [RestaurantsComponent],
  providers: [],
})
export class RestaurantsModule { }
