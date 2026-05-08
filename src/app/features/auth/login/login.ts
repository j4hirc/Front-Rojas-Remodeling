import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  onSubmit() {
    if (this.loginForm.valid) {
      // 1. Ver los datos que el usuario escribió y que se enviarán al puerto 8080
      console.log('--- DATOS DE ENTRADA (FRONTEND) ---');
      console.log('Email capturado:', this.loginForm.value.email);
      console.log('Password capturado:', this.loginForm.value.password);
      console.log('Objeto completo enviado:', this.loginForm.value);

      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
  console.log('--- RESPUESTA COMPLETA DEL SERVIDOR ---');
  console.log(res); // Esto te mostrará si el campo se llama 'token', 'accessToken' o 'jwt'
  
  // Si el objeto muestra algo como { accessToken: "..." }, cambia la línea de abajo
  console.log('Token JWT recibido:', res.accessToken); 
  
  this.router.navigate(['/dashboard']);
},
        error: (err) => {
          // 3. Ver detalles en caso de fallo (CORS, Error 401, etc.)
          console.error('--- ERROR EN LA PETICIÓN ---');
          console.error('Detalle técnico:', err);
          alert('Error de conexión con el backend en el puerto 8080');
        }
      });
    }
  }
}