import { MensagensComponent } from './mensagens/mensagens.component';
import { CampoControlErrorComponent } from './../components/campo-control-error/campo-control-error.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [
    CampoControlErrorComponent,
    MensagensComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CampoControlErrorComponent,
    MensagensComponent
  ]
})
export class SharedModule { }
