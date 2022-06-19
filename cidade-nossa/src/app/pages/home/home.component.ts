import { IComentario } from './../../shared/models/Comentario';
import { ComentariosService } from './../../services/comentarios.service';
import { IPoster } from './../../shared/models/Poster';
import { PosterService } from './../../services/poster.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  listPosters!: IPoster[];
  totalPostersCriados!: number;
  comentarios!: IComentario[];
  subscription!: Subscription;
  constructor(private posterService: PosterService, private comentariosService: ComentariosService) { }

  ngOnInit(): void {
   this.subscription =  this.posterService.getPosters().subscribe(res =>{
       this.listPosters = res;
       this.totalPostersCriados = this.listPosters.length;
       console.log(this.totalPostersCriados)
       console.log(this.listPosters);
     })
     this.comentariosService.getAll().subscribe(res => {
      this.comentarios = res;
      console.log(this.comentarios)
     });
  }

  ngOnDestroy(): void {

  }

  comentar(index: number){

  }
  like(poster: IPoster){
    poster.likes += 1;
    this.posterService.updatePoster(poster).subscribe(res => console.log(res));
  }
}
