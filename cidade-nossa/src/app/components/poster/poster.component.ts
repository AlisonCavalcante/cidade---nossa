import { IPoster } from './../../shared/models/Poster';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensagensService } from 'src/app/services/mensagens.service';
import { PosterService } from 'src/app/services/poster.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  formData: any;
  foto!: File;
  subscription!: Subscription;
  poster!: IPoster;
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService , private posterService: PosterService, private mensagensService: MensagensService) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {

  }

  initForm(){
    this.form = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: [null, Validators.required],
      hashtags: [null, Validators.required],
      // foto: [null],
    })
  }

  inputFileChange(event: any){
     if(event.target.files && event.target.files[0]){
       this.foto = <File>event.target.files[0];

     }

  }

  resetForm(){
    this.form.reset();
  }

  postar(){
    // Tentativa de Upload de Arquivo
   /* this.formData = new FormData();
    this.formData.append('foto', this.foto, this.foto.name);
    this.posterService.post(this.formData).subscribe(res => console.log(res))
  } */

  this.poster = this.form.value;
  this.poster.usuario = this.usuarioService.getUsuario();
  this.poster.isAberto = true;

  this.posterService.post(this.poster).subscribe(res => {
      this.mensagensService.addMessage("Postagem realizada com Sucesso!");
      this.resetForm();
  });
  }
}
