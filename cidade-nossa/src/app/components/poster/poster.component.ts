import { IPoster } from './../../shared/models/Poster';
import { Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensagensService } from 'src/app/services/mensagens.service';
import { PosterService } from 'src/app/services/poster.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css'],
})
export class PosterComponent implements OnInit, OnDestroy, OnChanges {
  form!: FormGroup;
  formData: any;
  foto!: File;
  subscription!: Subscription;
  poster!: IPoster;
  isEdit: boolean = false;
  categorias: string[] = ['Saúde', 'Saneamento', 'Educação'];
  @Input() posterEdit!: IPoster;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private posterService: PosterService,
    private mensagensService: MensagensService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.posterEdit) {
      this.popularCampos();
      this.isEdit = true;
    }
  }

  ngOnDestroy(): void {}

  initForm() {
    this.form = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: [null, Validators.required],
      hashtags: [null, Validators.required],
      categoria: ['Saúde', Validators.required],
      // foto: [null],
    });
  }

  popularCampos() {
    this.form.setValue({
      titulo: this.posterEdit.titulo,
      descricao: this.posterEdit.descricao,
      hashtags: this.posterEdit.hashtags,
      categoria: this.posterEdit.categoria,
    });
  }

  inputFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.foto = <File>event.target.files[0];
    }
  }

  resetForm() {
    this.form.reset();
  }

  preencherPoster() {
    if (this.isEdit) {
      this.posterEdit.titulo = this.form.get('titulo')?.value;
      this.posterEdit.descricao = this.form.get('descricao')?.value;
      this.posterEdit.hashtags = this.form.get('hashtags')?.value;
      this.posterEdit.categoria = this.form.get('categoria')?.value;
    } else {
      this.poster = this.form.value;
      this.poster.usuario = this.usuarioService.getUsuario();
      this.poster.isAberto = true;
    }
  }

  postar() {
    // Tentativa de Upload de Arquivo
    /* this.formData = new FormData();
    this.formData.append('foto', this.foto, this.foto.name);
    this.posterService.post(this.formData).subscribe(res => console.log(res))
  } */
    if (this.isEdit) {
      this.preencherPoster();
      this.posterService.updatePoster(this.posterEdit).subscribe((res) => {
        this.mensagensService.addMessage('Postagem editada com Sucesso!');
      });
    } else {
      this.preencherPoster();
      this.posterService.post(this.poster).subscribe((res) => {
        this.mensagensService.addMessage('Postagem realizada com Sucesso!');
        this.resetForm();
      });
    }
  }
}
