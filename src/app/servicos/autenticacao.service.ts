import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private readonly API_URL: string = "https://4f8e994d-14f3-4a4b-9384-31f93addd898.mock.pstmn.io/auth/login";

  constructor(private httpClient: HttpClient) { }

  fazerLogin(login: string, senha: string): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.API_URL, { login, senha });
  }
}
