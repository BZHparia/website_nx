import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent {

  @ViewChild('cursor') cursor: any;
  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e: any) {
    this.cursor.nativeElement.style.left = e.clientX + "px";
    this.cursor.nativeElement.style.top = e.clientY + "px";
  }
}
