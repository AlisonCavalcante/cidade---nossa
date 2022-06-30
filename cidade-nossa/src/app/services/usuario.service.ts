import { Constantes } from './../shared/Constantes';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../shared/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  createUser(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(Constantes.URL_BASE_USUARIOS, usuario);
  }

  getUserByEmailESenha(login: string, senha: string): Observable<Usuario>{
    return this.http.get<Usuario>(Constantes.URL_BASE_USUARIOS + `login?email=${login}&senha=${senha}`)
  }
  getUserByEmail(login: string): Observable<Usuario>{
    return this.http.get<Usuario>(Constantes.URL_BASE_USUARIOS + `/auth?email=${login}`)
  }
}
