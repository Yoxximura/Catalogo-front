import { Routes } from '@angular/router';

export const rootRouterConfig: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/inicio/inicio.module').then(m => m.InicioModule)
  }
];
