import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class ProyectosComponent implements OnInit {
  // Simulando datos de tu base de datos (puerto 8080)
  proyectos = [
    { id: 101, nombre: 'Remodelación Cocina Lux', cliente: 'Carlos Ruiz', fecha: '2024-05-10', progreso: 75, estado: 'En Proceso' },
    { id: 102, nombre: 'Pintura Fachada Edificio', cliente: 'Ana Lucía', fecha: '2024-05-01', progreso: 100, estado: 'Finalizado' },
    { id: 103, nombre: 'Instalación Drywall Oficinas', cliente: 'Empresa Tech', fecha: '2024-05-15', progreso: 20, estado: 'Pendiente' },
  ];

  constructor() {}

  ngOnInit(): void {}

  getProgresoColor(progreso: number): string {
    if (progreso < 30) return '#ea4335'; // Rojo (poco avance)
    if (progreso < 70) return '#f9ab00'; // Naranja (mitad)
    return '#34a853'; // Verde (casi listo)
  }
}