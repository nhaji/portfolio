import { Routes } from '@angular/router';
import { Profile } from './profile';

export const routes: Routes = [
  {
    path: '',
    component: Profile,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/profile-summary/profile-summary.page').then(m => m.ProfileSummaryPage),
      },
      {
        path: 'details',
        loadComponent: () => import('./pages/profile-details/profile-details.page').then(m => m.ProfileDetailsPage),
      },
    ]
  },
];
