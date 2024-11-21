import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class UserService {
private apiUrl = 'https://api.escuelajs.co/api/v1/users';

private currentUserSubject = new BehaviorSubject<string | null>(null);


  // Observable para obtener el nombre del usuario actual
  getCurrentUser(): Observable<string | null> {
    console.log('getCurrentUser llamado'); // Agrega este log para confirmar que el método se llama
    return this.currentUserSubject.asObservable();
  }

  // Establece el usuario actual
  setCurrentUser(username: string): void {
    console.log('SetCurrentUser llamado con:', username); // Agrega este log para depurar
    this.currentUserSubject.next(username); // Configura el nombre recibido como parámetro
  }

  // Limpia el estado del usuario (cierre de sesión)
  clearCurrentUser(): void {
    this.currentUserSubject.next(null);
  }
constructor(private http: HttpClient) {}
  getUsers(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}
}