import { Routes } from '@angular/router';
import { PROFILE_ROUTE } from './features/profile/profile.routes';
import { CHATBOT_ROUTE } from './features/chatbot/chatbot.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: PROFILE_ROUTE,
        pathMatch: 'full'
      },
      {
        path: PROFILE_ROUTE,
        loadChildren: () => import('./features/profile/profile.routes').then(m => m.routes),
      },
      {
        path: CHATBOT_ROUTE,
        loadChildren: () => import('./features/chatbot/chatbot.routes').then(m => m.routes),
      },
      {
        path: '**',
        redirectTo: PROFILE_ROUTE
      },
];
