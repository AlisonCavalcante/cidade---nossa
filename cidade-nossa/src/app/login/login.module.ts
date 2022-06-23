import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
