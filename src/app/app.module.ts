import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing'; 

import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ProgressBarService } from './progressbar/progressbar.service';

@NgModule({
  declarations: [
    AppComponent, ProgressbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule
  ],
  providers: [ProgressBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
