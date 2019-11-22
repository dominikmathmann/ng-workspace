import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Detail03HomeComponent } from './modules/detail03/home/home.component';


const routes: Routes = [
  {
    path: 'detail', loadChildren: () => import('./modules/detail01/detail.module').then(m => m.DetailModule)
  },
  {
    path: 'detail02', loadChildren: () => import('./modules/detail02/detail.module').then(m => m.DetailModule02)
  },
  {
    path: 'detail03', component: Detail03HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
