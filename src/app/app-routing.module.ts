import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home' , loadChildren:()=>import('./pages/home/home.module').then(m=> m.HomeModule)},
  {path:'client' , loadChildren:()=>import('./pages/client/client.module').then(m=> m.ClientModule)},
  {path:'realty' , loadChildren:()=>import('./pages/realty/realty.module').then(m=> m.RealtyModule)},
  {path:'approved' , loadChildren:()=>import('./pages/approved/approved.module').then(m=> m.ApprovedModule)},
  {path:'denied' , loadChildren:()=>import('./pages/denied/denied.module').then(m=> m.DeniedModule)},
  {path:'historic' , loadChildren:()=>import('./pages/historic/historic.module').then(m=> m.HistoricModule)},
  
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


