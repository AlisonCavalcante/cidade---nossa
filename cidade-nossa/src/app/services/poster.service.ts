import { Constantes } from './../shared/Constantes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosterService {

  constructor(private http: HttpClient) { }

  getPosters(): Observable<any>{
    return this.http.get<any>(Constantes.URL_BASE_POSTERS);
  }

  post(arquivo: any): Observable<any>{
    return this.http.post<any>(Constantes.URL_BASE_POSTERS, arquivo);
  }
}
