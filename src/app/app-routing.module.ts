import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./routes/post.routes').then(routes => routes.POST_ROUTES)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
  },
  {
    path: '**',
    redirectTo: 'posts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
