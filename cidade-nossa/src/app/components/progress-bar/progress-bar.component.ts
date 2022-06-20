import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnChanges {

  @Input() public totalProblemasCriados!: number;
  @Input() public totalProblemasResolvidos!: number;
  progresso!: string;
  constructor() { }

  ngOnInit(): void {
    this.getProgress();
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.getProgress()
;  }

  getProgress(){
    this.progresso = ((this.totalProblemasResolvidos / this.totalProblemasCriados)*100).toString();
  }

}
