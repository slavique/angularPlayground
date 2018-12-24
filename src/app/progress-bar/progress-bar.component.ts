import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input('segmentsCount') numTotal: number;
  @Input('currentSegment') currentSegment: number;

  segments: Array<any> ;
  step: number;

  incompletePercentage: number;
  incompleteProgressWidth: string;

  constructor() {}

  ngOnInit() {
    this.segments = Array(Math.abs(-this.numTotal));
    this.step = 100 / this.numTotal;
    this.incompletePercentage = 100 - ((this.currentSegment / this.numTotal) * 100);
    this.incompleteProgressWidth = `${this.incompletePercentage}%`;
  }
  decrProgress(): void {
    if (this.incompletePercentage < 100) {
      this.incompletePercentage += this.step;
      this.incompleteProgressWidth = `${this.incompletePercentage}%`;
    }

  }
  incrProgress(): void {
    if (this.incompletePercentage >= this.step) {
      this.incompletePercentage -= this.step;
      this.incompleteProgressWidth = `${this.incompletePercentage}%`;
    }
  }

}
