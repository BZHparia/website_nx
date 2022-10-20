import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() dimensions!: number[];
  // @Input() sizeCell!: number;

  width!: number;
  height!: number;
  autoSwitcher: boolean = false;

  gap: number = 30;

  mySubscription: Subscription | undefined;

  constructor() {
    this.mySubscription= interval(2000).subscribe((x =>{
      this.doStuff();
  }));
  }

  ngOnInit() {
    this.width = this.dimensions[0];
    this.height = this.dimensions[1];
  }

  doStuff() {
    this.autoSwitcher = !this.autoSwitcher;
  }

  isEven(value: number) {
    if (this.autoSwitcher)
      return true;
    else
      return false;
  }

}
