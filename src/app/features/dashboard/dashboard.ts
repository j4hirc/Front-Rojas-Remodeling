import { CommonModule } from '@angular/common';
import { Component, inject, signal} from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  userEmail = 'Admin'

  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  closeMenu() {
  this.isMenuOpen.set(false);
}
// En tu DashboardComponent
navegarA(ruta: string) {
  const token = localStorage.getItem('token');
  console.log('--- Intentando navegar a:', ruta, '---');
  console.log('Token en memoria:', token ? 'Existe ✅' : 'No existe ❌');

  if (token) {
    // Forzamos la navegación manual
    this.router.navigate([ruta]).then(success => {
      if (success) {
        console.log('Navegación exitosa a:', ruta);
        this.closeMenu(); // Si tienes la función para cerrar el menú en móvil
      } else {
        console.error('Error: Angular bloqueó la navegación a:', ruta);
      }
    });
  } else {
    console.warn('No hay token, mandando al login por seguridad');
    this.router.navigate(['/login']);
  }
}


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
