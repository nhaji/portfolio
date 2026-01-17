import { Routes } from '@angular/router';
import { Contact } from './contact';

export const CONTACT_ROUTE: string = 'contact';

export const routes: Routes = [
  {
    path: '',
    component: Contact,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/contact-init/contact-init.page').then(m => m.ContactInitPage),
      },
    ]
  },
];
