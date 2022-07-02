import { Constantes } from './../shared/Constantes';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../shared/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuario!: IUsuario;
  constructor(private http: HttpClient) { }

  createUser(usuario: IUsuario): Observable<IUsuario>{
    return this.http.post<IUsuario>(Constantes.URL_BASE_USUARIOS, usuario);
  }

  getUserByEmailESenha(login: string, senha: string): Observable<IUsuario>{
    return this.http.get<IUsuario>(Constantes.URL_BASE_USUARIOS + `/login?email=${login}&senha=${senha}`)
  }
  getUserByEmail(login: string): Observable<IUsuario>{
    return this.http.get<IUsuario>(Constantes.URL_BASE_USUARIOS + `/auth?email=${login}`)
  }

  getUsuario(){
    return this.usuario;
  }

  setUsuario(usuario: IUsuario){
    console.log(usuario)
    this.usuario = usuario;
  }
}
