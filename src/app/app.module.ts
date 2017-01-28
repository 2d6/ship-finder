import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ships } from './ship-api.service';
import { Pilots } from './ship-details/pilot-details/pilot-api.service';


import { AppComponent } from './app.component';
import { ShipDetailsComponent } from './ship-details/ship-details.component';
import { PilotDetailsComponent } from './ship-details/pilot-details/pilot-details.component';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ShipDetailsComponent,
    PilotDetailsComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Ships, Pilots],
  bootstrap: [AppComponent]
})
export class AppModule { }
