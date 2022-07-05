import { Router } from '@angular/router';
import { IUsuario } from './../../shared/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IComentario,
  IComentarioEnvio,
} from './../../shared/models/Comentario';
import { ComentariosService } from './../../services/comentarios.service';
import { IPoster } from './../../shared/models/Poster';
import { PosterService } from './../../services/poster.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MensagensService } from 'src/app/services/mensagens.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  listPosters!: IPoster[];
  setlistPosters!: IPoster[];
  totalPostersCriados: number = 0;
  totalPostersResolvidos: number = 0;
  comentarios!: IComentario[];
  coment!: IComentarioEnvio;
  subscription!: Subscription;
  formComentario!: FormGroup;
  meuFavorito: boolean = false;
  usuarioAtivo!: IUsuario;

  constructor(
    private posterService: PosterService,
    private comentariosService: ComentariosService,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private mensagensService: MensagensService
  ) {}

  ngOnInit(): void {
    this.usuarioAtivo = this.usuarioService.getUsuario();
    this.initiFormComentario();
    this.getPosters();
    this.getTotalPosters();
  }

  getTotalPosters() {
    this.posterService.getTotalPosters().subscribe((res) => {
      this.totalPostersCriados = res;
    });
  }

  getPosters(){
    this.subscription = this.posterService.getPosters().subscribe((res) => {
      this.listPosters = res;
      this.setlistPosters = res;
      for (let i = 0; i < this.listPosters.length; i++) {
        this.listPosters[i].comentarios = [];
        if (this.listPosters[i].isAberto == false) {
          this.totalPostersResolvidos += 1;
        }
      }
      this.getComentarios();
    });
  }

  getComentarios(){
    this.comentariosService.getAll().subscribe((res) => {
      this.comentarios = res;
      this.organizarComentarios();
    });
  }

  ngOnDestroy(): void {}

  deletePoster(poster: IPoster, index: number) {
    if(poster.id)
    this.posterService.delete(poster.id).subscribe(res => console.log(res))
  }


  initiFormComentario() {
    this.formComentario = this.formBuilder.group({
      comentario: [null, Validators.required],
    });
  }

  verificarUsuario(mensagem: string): boolean {
    if (this.usuarioService.getUsuario() == undefined) {
      this.mensagensService.addMessage(mensagem);
      return true;
    }
    return false;
  }

  habilitarComentar(poster: IPoster, index: number) {
    if (
      this.verificarUsuario('Precisa-se realizar login para Comentar.') == false
    ) {
      this.listPosters[index].isComment = !this.listPosters[index].isComment;
      this.usuarioAtivo = this.usuarioService.getUsuario();
    }
  }

  comentar(poster: IPoster, index: number) {
    this.listPosters[index].isComment = false;
    this.coment = this.formComentario.value;
    this.coment.poster = poster;
    this.coment.usuario = this.usuarioAtivo;
    // delete this.coment.poster.dataCriacao; //deleta uma chave de um objeto, somente se ele tiver a possibilidade de ser undefined
    this.comentariosService.create(this.coment).subscribe((res) => {
      this.resetForm();
      if (this.listPosters[index].comentarios) {
        this.listPosters[index].comentarios?.unshift(res);
      }
    });
  }

  like(poster: IPoster) {
    poster.likes += 1;
    this.posterService
      .updatePoster(poster)
      .subscribe((res) => console.log(res));
  }

  favoritarComentario() {
    this.meuFavorito = !this.meuFavorito;
  }

  organizarComentarios() {
    for (let i = 0; i < this.listPosters.length; i++) {
      if (this.comentarios.length != 0) {
        for (let j = 0; j < this.comentarios.length; j++) {
          if (this.listPosters[i].id == this.comentarios[j].poster.id) {
            this.listPosters[i].comentarios?.push(this.comentarios[j]);
          }
        }
      }
    }
  }

  resetForm() {
    this.formComentario.reset();
  }

  relaterProblema() {
    if (
      this.verificarUsuario(
        'Precisa-se realizar login para relatar um problema.'
      ) == false
    ) {
      this.router.navigate(['/relatar']);
    }
  }

  searchProblemas(event: string) {
    const produtosFilter = this.setlistPosters.filter((poster: IPoster) => {
      return !poster.titulo.indexOf(event);
    });
    this.listPosters = produtosFilter;
  }
}
