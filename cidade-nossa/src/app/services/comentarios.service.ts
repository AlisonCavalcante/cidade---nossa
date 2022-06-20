import { IComentario } from './../shared/models/Comentario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constantes } from '../shared/Constantes';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IComentario[]>{
    return this.http.get<IComentario[]>(Constantes.URL_BASE_COMENTARIOS);
  }

  create(comentario: IComentario): Observable<IComentario>{
    return this.http.post<IComentario>(Constantes.URL_BASE_COMENTARIOS, comentario);
  }

}
