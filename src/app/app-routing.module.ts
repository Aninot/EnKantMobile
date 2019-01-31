import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'informations', loadChildren: './informations/informations.module#InformationsPageModule' },
  { path: 'pannier', loadChildren: './pannier/pannier.module#PannierPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'historique', loadChildren: './historique/historique.module#HistoriquePageModule' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
