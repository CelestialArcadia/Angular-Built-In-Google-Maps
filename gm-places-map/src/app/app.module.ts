import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GmMapComponent } from './components/gm-map/gm-map.component';
import { PlacesListComponent } from './components/places-list/places-list.component';

@NgModule({
  declarations: [AppComponent, GmMapComponent, PlacesListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PlacesViewModule,
    MapViewModule,
    InputViewModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
