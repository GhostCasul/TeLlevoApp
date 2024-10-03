import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticaService {
  private apiUrl = 'https://your-backend-api.com/auth'; // Cambia esta URL según tu API
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    // Inicializa el BehaviorSubject con el usuario almacenado en el localStorage
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Retorna el valor actual del usuario
  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  // Método para iniciar sesión
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap(response => {
          // Guarda los detalles del usuario y el token en el localStorage
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response);
        })
      );
  }

  // Método para cerrar sesión
  logout(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/logout`, {})
      .pipe(
        tap(() => {
          // Elimina el usuario y el token del localStorage
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next({});
          this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
        })
      );
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!this.currentUserValue;
  }
}
