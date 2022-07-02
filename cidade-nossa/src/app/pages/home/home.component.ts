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
  comentarios3!: IComentario[];
  coment!: IComentarioEnvio;
  subscription!: Subscription;
  formComentario!: FormGroup;
  meuFavorito: boolean = false;
  usuarioAtivo!: IUsuario;


  constructor(
    private posterService: PosterService,
    private comentariosService: ComentariosService,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.comentarios3 = [];
    this.initiFormComentario();
    this.subscription = this.posterService.getPosters().subscribe((res) => {
      this.listPosters = res;
      console.log(this.listPosters)
      this.setlistPosters = res;
      for (let i = 0; i < this.listPosters.length; i++) {
        this.listPosters[i].comentarios = [];
        if (this.listPosters[i].isAberto == false) {
          this.totalPostersResolvidos += 1;
        }
      }
      this.comentariosService.getAll().subscribe((res) => {
        this.comentarios = res;
        this.organizarComentarios();
      });
    });

    this.getTotalPosters();
  }

  getTotalPosters() {
    this.posterService.getTotalPosters().subscribe((res) => {
      this.totalPostersCriados = res;
    });
  }

  ngOnDestroy(): void {}

  deletePoster(poster: IPoster, index: number){

  }

  initiFormComentario() {
    this.formComentario = this.formBuilder.group({
      comentario: [null, Validators.required],
    });
  }

  habilitarComentar(poster: IPoster, index: number) {
    console.log(this.listPosters[index].isComment)
    this.listPosters[index].isComment = !this.listPosters[index].isComment;
    this.usuarioAtivo = this.usuarioService.getUsuario();
    console.log(this.usuarioAtivo)
  }

  // Método para formatar a data
  /*formatarData(data: string[]): string {
    let dia = data[2].slice(0, 2);
    let mes = data[1];
    let ano = data[0];
    let dataFormatada = `${dia} -${mes} - ${ano}`;
    return dataFormatada;
  }
*/


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

  searchProblemas(event: string) {
    const produtosFilter = this.setlistPosters.filter((poster: IPoster) => {
      return !poster.titulo.indexOf(event);
    });
    this.listPosters = produtosFilter;
  }
}
