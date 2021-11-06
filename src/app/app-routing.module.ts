import { DetailCocktailComponent } from './components/list-cocktails/detail-cocktail/detail-cocktail.component';
import { ListCocktailsComponent } from './components/list-cocktails/list-cocktails.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list-cocktails', component: ListCocktailsComponent},
  { path: 'detail-cocktail/:id', component: DetailCocktailComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'list-cocktails'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
