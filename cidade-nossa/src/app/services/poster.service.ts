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

  getById(id: number): Observable<IPoster>{
    return this.http.get<IPoster>(Constantes.URL_POSTERS_ID+`${id}`);
  }

  getPosters(): Observable<IPoster[]>{
    return this.http.get<IPoster[]>(Constantes.URL_BASE_POSTERS);
  }
  getTotalPosters(): Observable<number>{
    return this.http.get<number>(Constantes.URL_TOTAL_POSTER);
  }

  getPosterByCategoria(categoria: string): Observable<IPoster>{
    return this.http.get<IPoster>(Constantes.URL_POSTERS_BYCATEGORIA + `${categoria}`)
  }

  post(arquivo: IPoster): Observable<IPoster>{
    return this.http.post<IPoster>(Constantes.URL_BASE_POSTERS, arquivo);
  }

  updatePoster(poster: IPoster): Observable<IPoster>{
    return this.http.put<IPoster>(Constantes.URL_BASE_POSTERS+ `/${poster.id}`, poster);
  }




}
