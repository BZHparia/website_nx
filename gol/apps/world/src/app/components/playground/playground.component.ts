import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  // cursor: any;
  constructor() {
    // this.cursor!= document.querySelector(".cursor");
  }

  ngOnInit() {
  }

  @ViewChild('cursor') cursor: any;
  // this.cursor = document.querySelector(".cursor");
  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e: any) {
    // console.log(this.cursor);
    this.cursor.nativeElement.style.left = e.clientX + "px";
    this.cursor.nativeElement.style.top = e.clientY + "px";
  }

  // afterViewInit() {
  //   let video = this.myVideo.nativeElement;
  //   video.src = URL.createObjectURL(yourBlob);
  //   video.play();
  // }


}
