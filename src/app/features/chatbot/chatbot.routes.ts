import { Routes } from '@angular/router';
import { Chatbot } from './chatbot';

export const CHATBOT_ROUTE: string = 'chatbot';

export const routes: Routes = [
  {
    path: '',
    component: Chatbot,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/chatbot-stream/chatbot-stream.page').then(m => m.ChatbotStreamPage),
      },
    ]
  },
];
