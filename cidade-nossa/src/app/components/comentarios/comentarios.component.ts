import { IUsuario } from './../../shared/models/Usuario';
import { UsuarioService } from './../../services/usuario.service';
import { IComentario } from './../../shared/models/Comentario';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
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
  usuarioAtivo!: IUsuario;
  @ViewChild('comentario') comentario!: ElementRef;
  constructor(private comentarioService: ComentariosService, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioAtivo = this.usuarioService.getUsuario();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ocultar() {
    this.isVisible = !this.isVisible;

  }
  onEdit(index: number){
    if(this.comentarios != undefined){
      this.comentarios[index].isEdit = !this.comentarios[index].isEdit
    }
  }
  edit(comentario: IComentario, index: number){
    comentario.comentario = this.comentario.nativeElement.value;
    this.comentarioService.edit(comentario.id, comentario).subscribe(res => console.log(res))
  }

  delete(comentario: IComentario, index: number) {
    this.comentarioService.delete(comentario.id).subscribe(res => {
      this.comentarios?.splice(index,1)
    });

  }

  favoritarComentario() {}
}
