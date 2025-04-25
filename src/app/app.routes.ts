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
    ]
  },
  { path: '', redirectTo:'login', pathMatch: 'full' },
];
