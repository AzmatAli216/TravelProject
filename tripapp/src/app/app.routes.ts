import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Destinations} from './destinations/destinations';
import { About } from './about/about';
export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'destinations',
    component: Destinations
  },

  {
    path:'about',
    component: About
  }
];
