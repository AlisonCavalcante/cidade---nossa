import { IComentario, IComentarioEnvio } from './../shared/models/Comentario';
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

  create(comentario: IComentarioEnvio): Observable<IComentario>{
    return this.http.post<IComentario>(Constantes.URL_BASE_COMENTARIOS, comentario);
  }

  delete(id: number | undefined): Observable<any>{
   return this.http.delete<any>(Constantes.URL_BASE_COMENTARIOS + `/${id}`)
  }

}
