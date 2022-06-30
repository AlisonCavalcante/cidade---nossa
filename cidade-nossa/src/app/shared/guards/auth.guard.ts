import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private usuarioService: UsuarioService) { }

  canActivate(): boolean{
    if(this.usuarioService.getUsuario()){
      return true
    }
      return false;
  }
}
