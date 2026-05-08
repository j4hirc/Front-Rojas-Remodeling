import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8081/api/v1/auth'; 

  tokenSig = signal<string | null>(localStorage.getItem('token'));

  login(credentials: any) {
    return this.http.post<{accessToken: string}>(`${this.apiUrl}/login`, credentials).pipe(
      tap(res => {
        localStorage.setItem('token', res.accessToken);
        this.tokenSig.set(res.accessToken);
      })
    );
  }

  
}