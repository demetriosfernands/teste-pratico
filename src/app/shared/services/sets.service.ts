import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/todo.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SetsService {
  private apiUrl = 'https://api.magicthegathering.io/v1';

  constructor(private http: HttpClient) { }

  // Método para realizar uma chamada GET à API
  getSets(form): Observable<any> {
    const endpoint = `/sets?name=${form.name}&block=${form.block}`;
    return this.http.get<any>(`${this.apiUrl}${endpoint}`);
  }

  getSetsById(id: number): Observable<any> {
    const endpoint = `/sets/${id}/booster`;
    return this.http.get<any>(`${this.apiUrl}${endpoint}`);
  }
}
