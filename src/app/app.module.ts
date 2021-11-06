import { DetailCocktailComponent } from './components/list-cocktails/detail-cocktail/detail-cocktail.component';
import { ListCocktailsComponent } from './components/list-cocktails/list-cocktails.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCocktailsComponent,
    DetailCocktailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
