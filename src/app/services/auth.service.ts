import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Usuario {
  nombre: string;
  apellidos: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioSubject: BehaviorSubject<Usuario | null>;
  public usuario$: Observable<Usuario | null>;

  constructor() {
    this.usuarioSubject = new BehaviorSubject<Usuario | null>(null);
    this.usuario$ = this.usuarioSubject.asObservable();
  }
  login(usuario: Usuario): void {
    // Guardar en localStorage si aún no existe
    if (!localStorage.getItem('userData')) {
      localStorage.setItem('userData', JSON.stringify(usuario));
    }
    // Actualizar observable de sesión
    this.usuarioSubject.next(usuario);
  }
  logout(): void {
    this.usuarioSubject.next(null);
  }

  getUsuarioActual(): Usuario | null {
    return this.usuarioSubject.value;
  }

  isLoggedIn(): boolean {
    return !!this.usuarioSubject.value;
  }

  getStoredUser(): Usuario | null {
    const storedUser = localStorage.getItem('userData');
    return storedUser ? JSON.parse(storedUser) : null;
  }
}
