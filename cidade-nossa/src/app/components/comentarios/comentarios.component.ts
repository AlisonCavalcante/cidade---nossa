import { IComentario } from './../../shared/models/Comentario';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit, OnChanges {

  @Input() comentarios!: IComentario[] | undefined;
  isVisible: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }
  ocultar(){
    this.isVisible = !this.isVisible;
  }

  favoritarComentario(){}
}
