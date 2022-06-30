import { MensagensService } from 'src/app/services/mensagens.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro!: FormGroup
  constructor(private formBuilder: FormBuilder, private mensagensService: MensagensService ,private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  resetForm(){
    this.formCadastro.reset();
  }

  submit(){
    this.usuarioService.createUser(this.formCadastro.value).subscribe(res => {
      if(res != undefined){
        this.mensagensService.addMessage("Usuário criado com sucesso!")
        this.resetForm();
      }
    })
  }


}
