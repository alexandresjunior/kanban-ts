import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoTarefa } from '../interfaces/tipoTarefa';

@Injectable({
  providedIn: 'root'
})
export class TiposTarefaService {
  private readonly API_URL = "http://localhost:5000/tiposTarefa";

  constructor(private httpClient: HttpClient) { }

  listarTiposTarefa(): Observable<TipoTarefa[]> {
    return this.httpClient.get<TipoTarefa[]>(this.API_URL);
  }
}
