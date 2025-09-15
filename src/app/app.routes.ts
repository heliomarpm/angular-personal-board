import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '#', pathMatch: 'full' },
  { path: '404', loadComponent: () => import('./views/page-not-found/page-not-found').then((c) => c.PageNotFound) },
  { path: 'bookmarks', loadComponent: () => import('./views/bookmarks/bookmarks').then((c) => c.Bookmarks) },
  { path: '**', redirectTo: '/404' },
];
