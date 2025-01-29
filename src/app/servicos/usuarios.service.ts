import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private readonly API_URL = "http://localhost:5000/usuarios"

  constructor(private httpClient: HttpClient) { }

  listarUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.API_URL);
  }
}
