import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListvideosComponent } from './pages/listvideos/listvideos.component';
import { SinglevideoComponent } from './pages/singlevideo/singlevideo.component';

const routes: Routes = [
  {
    path: '',
    component: ListvideosComponent,
  },
  {
    path: 'watch/:id',
    component: SinglevideoComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
