import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from '../interfaces/status';

@Injectable({
  providedIn: 'root'
})
export class StatusesService {
  private readonly API_URL = "http://localhost:5000/statuses";

  constructor(private httpClient: HttpClient) { }

  listarStatuses(): Observable<Status[]> {
    return this.httpClient.get<Status[]>(this.API_URL);
  }
}
