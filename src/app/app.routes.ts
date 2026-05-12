import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./features/dashboard/dashboard').then(m => m.DashboardComponent),
    canActivate: [authGuard],
    children: [
      { 
        path: 'resumen', 
        loadComponent: () => import('./features/resumen/resumen').then(m => m.ResumenComponent) 
      },
      { 
        path: 'usuarios', 
        loadComponent: () => import('./features/usuarios/usuarios').then(m => m.UsuariosComponent) 
      },
      { 
        path: 'proyectos', 
        loadComponent: () => import('./features/proyectos/proyectos').then(m => m.ProyectosComponent) 
      },
      { path: '', redirectTo: 'resumen', pathMatch: 'full' },
      // Agregamos un comodín interno para el dashboard
      { path: '**', redirectTo: 'resumen' } 
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // Solo redirigir al login si la ruta no empieza con dashboard
  { path: '**', redirectTo: 'login' }
];