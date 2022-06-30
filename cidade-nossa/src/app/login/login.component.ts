import { MensagensService } from './../services/mensagens.service';
import { UsuarioService } from './../services/usuario.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  isVerifyLogin: boolean = false;
  constructor(
    private usuarioService: UsuarioService,
    private mensagensService: MensagensService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formLogin = this.formBuilder.group({
      login: [null, Validators.required],
      senha: [null, Validators.required],
    });
  }
  submit() {
    this.isVerifyLogin = true;
    this.usuarioService
      .getUserByEmailESenha(
        this.formLogin.get('login')?.value,
        this.formLogin.get('senha')?.value
      )
      .subscribe((usuario) => {
        if (usuario == null) {
          this.mensagensService.addMessage('Usuário ou senha Incorretos!');
          this.isVerifyLogin = false;
        } else {
          this.mensagensService.addMessage('Login Efetuado com Sucesso');
          this.usuarioService.setUsuario(usuario);
          setTimeout(() => {
            this.isVerifyLogin = false;
            this.router.navigate(['/']);
          }, 4000);
        }
      });
  }
  teste() {
    this.router.navigate(['login/cadastro']);
  }
}
