import { Component, HostListener, OnInit } from '@angular/core';
import { emojis } from './emojis';

@Component({
  selector: 'app-emojis',
  templateUrl: './emojis.component.html',
  styleUrls: ['./emojis.component.scss']
})
export class EmojisComponent implements OnInit {

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

    const size = document.body.clientWidth > 800 ? 100 : 100;
    
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
    tile.style.display = "flex";
    tile.style.justifyContent = "center";
    tile.style.alignItems = "center";
    tile.textContent = this.getRandomEmoji();
    tile.style.fontSize = "400%";
    tile.style.color = "red";
    
    return tile;
  }

  handleOnClick(index: number) {
    this.toggle();
    
    // anime({
    //   targets: ".tile",
    //   opacity: this.toggled ? 0 : 1,
    //   delay: anime.stagger(50, {
    //     grid: [this.columns, this.rows],
    //     from: index
    //   })
    // });
  }

  toggle() {
    this.toggled = !this.toggled;
  }

  @HostListener('window:resize', ['$event'])
	onResize(event: any) {
    this.createGrid();
	}

  getRandomEmoji(): string {
    return emojis[Math.floor(Math.random() * emojis.length)];
  }

}
