import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  private authService = inject(AuthService);
  private router = inject(Router);

  userEmail = 'Admin'

  logout() {
    // 1. Borramos el token del almacenamiento local
    localStorage.removeItem('token');
    
    // 2. Limpiamos el Signal en el servicio
    this.authService.tokenSig.set(null);
    
    // 3. Mandamos al usuario de vuelta al login
    console.log('Sesión cerrada correctamente');
    this.router.navigate(['/login']);
  }


}
