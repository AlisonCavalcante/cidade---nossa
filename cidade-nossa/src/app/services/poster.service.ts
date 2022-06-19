import { IPoster } from './../shared/models/Poster';
import { Constantes } from './../shared/Constantes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosterService {

  constructor(private http: HttpClient) { }

  getPosters(): Observable<IPoster[]>{
    return this.http.get<IPoster[]>(Constantes.URL_BASE_POSTERS);
  }

  post(arquivo: IPoster): Observable<IPoster>{
    return this.http.post<IPoster>(Constantes.URL_BASE_POSTERS, arquivo);
  }
}
