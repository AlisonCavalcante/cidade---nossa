import { PosterService } from './../../services/poster.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private posterService: PosterService) { }

  ngOnInit(): void {
    this.posterService.getPosters().subscribe(res =>{
      console.log(res);
    })
  }

}
