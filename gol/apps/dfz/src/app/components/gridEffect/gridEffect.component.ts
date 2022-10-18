import { Component, HostListener, OnInit } from '@angular/core';
import anime from 'animejs';


@Component({
  selector: 'app-gridEffect',
  templateUrl: './gridEffect.component.html',
  styleUrls: ['./gridEffect.component.scss']
})

export class GridEffectComponent implements OnInit {
  wrapper: any;
  columns = 0;
  rows = 0;
  toggled = false;

  constructor() {
    this.wrapper!= document.getElementById("tiles");
  }
  ngOnInit() {
    this.createGrid();
  }

  createGrid() {
    this.wrapper = document.getElementById("tiles");
    this.wrapper.innerHTML = "";

    const size = document.body.clientWidth > 800 ? 50 : 20;
    
    this.columns = Math.floor(document.body.clientWidth / size);
    this.rows = Math.floor(document.body.clientHeight / size);
    
    this.wrapper.style.setProperty("--columns", this.columns.toString());
    this.wrapper.style.setProperty("--rows", this.rows.toString());
    this.createTiles(this.columns * this.rows);
  }

  createTiles(quantity: number) {
    if(this.wrapper) {
      Array.from(Array(quantity)).map((tile, index) => {
        this.wrapper?.appendChild(this.createTile(index));
      });
    }
  }

  createTile(index: number) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.style.opacity = this.toggled ? "0" : "1";
    tile.onclick = e => this.handleOnClick(index);
    
    return tile;
  }

  handleOnClick(index: number) {
    this.toggle();
    
    anime({
      targets: ".tile",
      opacity: this.toggled ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [this.columns, this.rows],
        from: index
      })
    });
  }

  toggle() {
    this.toggled = !this.toggled;
  }

  @HostListener('window:resize', ['$event'])
	onResize(event: any) {
    this.createGrid();
	}

}