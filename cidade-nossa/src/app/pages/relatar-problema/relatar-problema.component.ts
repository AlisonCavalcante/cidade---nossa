import { IPoster } from './../../shared/models/Poster';
import { PosterService } from './../../services/poster.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-relatar-problema',
  templateUrl: './relatar-problema.component.html',
  styleUrls: ['./relatar-problema.component.css']
})
export class RelatarProblemaComponent implements OnInit {

  id!: number;
  poster!: IPoster;
  constructor(private activateRoute: ActivatedRoute, private posterService: PosterService) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    if(this.id != undefined){
      this.posterService.getById(this.id).subscribe(res => {
        this.poster = res;
      });
    }
  }

}
