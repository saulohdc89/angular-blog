import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ContentPage } from './content-page/content-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'post/:id', component: ContentPage },
];
