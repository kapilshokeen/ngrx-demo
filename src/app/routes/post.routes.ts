import type { Routes } from "@angular/router";

export const POST_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('../components/post-list/post-list.component').then(m => m.PostListComponent),
  },
  {
    path: ':id',
    loadComponent: () => import('../components/post/post.component').then(c => c.PostComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
