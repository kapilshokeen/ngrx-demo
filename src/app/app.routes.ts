import { type Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./routes/post.routes').then(routes => routes.POST_ROUTES),
    title: 'Post section'
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
