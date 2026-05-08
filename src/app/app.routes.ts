import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    // Cargamos el componente del Dashboard (creado por comandos)
    loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard),
    canActivate: [authGuard] // <--- ESTO activa la verificación
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }


];
