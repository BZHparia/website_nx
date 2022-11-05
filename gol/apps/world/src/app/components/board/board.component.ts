import { Component, HostListener, Input, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  // @Input() dimensions!: number[];
  // @Input() sizeCell!: number;

  width!: number;
  height!: number;
  autoSwitcher: boolean = false;

  widthScreen = 0;
  heightScreen = 0;

  wrapper: any;
  body: any;
  columns = 0;
  rows = 0;

  run = false;

  gap: number = 30;

  mySubscription: Subscription | undefined;

  constructor() {
  //   this.mySubscription= interval(2000).subscribe((x =>{
  //     this.doStuff();
  // }));
  this.wrapper!= document.getElementById("board");
  }

  ngOnInit() {
    this.setGrid();
    // this.width = this.dimensions[0];
    // this.height = this.dimensions[1];
  }

  setGrid() {
    document.body.style.background = 'black';

    this.wrapper = document.getElementById("board");
    // this.widthScreen = document.body.clientWidth;
    // this.heightScreen = document.body.clientHeight;

    const size = document.body.clientWidth > 800 ? 20 : 20;
    this.columns = Math.floor(document.body.clientWidth / size);
    this.rows = Math.floor(document.body.clientHeight / size);
    this.wrapper.style.setProperty("--columns", this.columns.toString());
    this.wrapper.style.setProperty("--rows", this.rows.toString());
    // console.log("Col x row:", this.columns, "x", this.rows);
    this.createCells(this.columns * this.rows);
  }

  createCells(quantity: number) {
    if(this.wrapper) {
      Array.from(Array(quantity)).map((tile, index) => {
        this.wrapper?.appendChild(this.createCell(index));
      });
    }
  }

  createCell(index: number) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.background = '#f0f0f0';
    // cell.style.opacity = this.toggled ? "0" : "1";
    cell.onclick = e => cell.style.background=='black'? cell.style.background='#f0f0f0' : cell.style.background='black';
    
    return cell;
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

  @HostListener('window:resize', ['$event'])
	onResize(event: any) {
    // this.setGrid();
	}

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    // this.key = event.key;
    console.log(event.key);
    if(event.key === ' ') {
      this.run = !this.run;
    }
  }

}
