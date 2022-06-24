import { IComentario } from './../../shared/models/Comentario';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit, OnChanges {
  @Input() comentarios!: IComentario[] | undefined;
  isVisible: boolean = true;
  constructor(private comentarioService: ComentariosService) {}

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ocultar() {
    this.isVisible = !this.isVisible;

  }
  delete(comentario: IComentario, index: number) {
    this.comentarioService.delete(comentario.id).subscribe(res => {
      this.comentarios?.splice(index,1)
    });

  }

  favoritarComentario() {}
}
