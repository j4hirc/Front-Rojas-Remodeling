import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class UsuariosComponent implements OnInit {
  // Estos datos vendrán de tu API en el futuro
  usuarios = [
    { id: 1, nombre: 'Josué Abad', email: 'admin@rojas.com', rol: 'ADMIN', estado: 'Activo' },
    { id: 2, nombre: 'Juan Pérez', email: 'juan.p@remodeling.com', rol: 'USER', estado: 'Activo' },
    { id: 3, nombre: 'Maria Garcia', email: 'm.garcia@remodeling.com', rol: 'USER', estado: 'Inactivo' },
  ];

  constructor() {}

  ngOnInit(): void {}

  eliminarUsuario(id: number) {
    if(confirm('¿Estás seguro de eliminar este usuario?')) {
      console.log('Eliminando usuario:', id);
      // Aquí irá la petición DELETE al backend
    }
  }
}