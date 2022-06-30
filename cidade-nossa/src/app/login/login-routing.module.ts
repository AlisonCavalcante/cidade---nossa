import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { CadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [
  { path:'', component: LoginComponent},
  { path:'cadastro', component: CadastroComponent},
  {path: 'recuperar-senha', component: RecuperarSenhaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
