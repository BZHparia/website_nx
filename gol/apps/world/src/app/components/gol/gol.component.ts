import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gol',
  templateUrl: './gol.component.html',
  styleUrls: ['./gol.component.scss']
})
export class GolComponent implements OnInit {

  dimensions: number[] = [10, 10];

  constructor() { }

  ngOnInit() {
  }

}
