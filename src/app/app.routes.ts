import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login',
      fullscreen: true,
    },
  },
  {
    path: 'main',
    loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent),
    children: [
      { path: '', redirectTo:'equipment/list', pathMatch: 'full' },
      {
        path: 'equipment/create',
        loadComponent: () => import('./pages/main/equipment/create/create.component').then(m => m.CreateEquipmentComponent),
        data: {
          title: 'Criar equipamento',
          fullscreen: true,
        },
      },
      {
        path: 'equipment/list',
        loadComponent: () => import('./pages/main/equipment/list/list.component').then(m => m.ListEquipmentComponent),
        data: {
          title: 'Criar equipamento',
          fullscreen: true,
        },
      },
      {
        path: 'equipment/update/:id',
        loadComponent: () => import('./pages/main/equipment/create/create.component').then(m => m.CreateEquipmentComponent),
        data: {
          title: 'Atualizar equipamento',
          fullscreen: true,
        },
      },
      {
        path: 'notifications/list',
        loadComponent: () => import('./pages/main/notifications/notifications.component').then(m => m.NotificationsComponent),
        data: {
          title: 'Visulizar notificações',
          fullscreen: true,
        },
      },
    ]
  },
  { path: '', redirectTo:'login', pathMatch: 'full' },
];
