import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  textSearch = ""
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.emmitSearch.emit(this.textSearch);
  }
}
