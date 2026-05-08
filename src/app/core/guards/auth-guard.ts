import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';


export const authGuard: CanActivateFn = (route, state) => {


  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.tokenSig() || localStorage.getItem('token')){

    return true;
  }

  console.warn('Acceso denegado: No se encontro token de sesion')
  router.navigate(['/login'])
  return false;
};
