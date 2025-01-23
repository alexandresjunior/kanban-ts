import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/tarefa';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private readonly API_URL = 'http://localhost:5001/tarefas';

  constructor(private http: HttpClient) { }

  listarTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.API_URL);
  }

  listarUsuariosComTarefasAtribuidas(): Observable<string[]> {
    return this.listarTarefas().pipe(
      map((tarefas) => {
        const usuarios = tarefas.map((tarefa) => tarefa.assigned_to);
        return [...new Set(usuarios)];
      })
    );
  }

}
