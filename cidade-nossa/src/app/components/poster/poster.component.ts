import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PosterService } from 'src/app/services/poster.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  form!: FormGroup;
  formData: any;
  foto!: File;
  constructor(private formBuilder: FormBuilder, private posterService: PosterService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.form = this.formBuilder.group({
      titulo: [null, Validators.required],
      descricao: [null, Validators.required],
      hashtags: [null],
      foto: [null],
    })
  }

  inputFileChange(event: any){
     if(event.target.files && event.target.files[0]){
       this.foto = <File>event.target.files[0];

     }

  }

  postar(){
    this.formData = new FormData();
    this.formData.append('foto', this.foto, this.foto.name);
    this.posterService.post(this.formData).subscribe(res => console.log(res))
  }
}
