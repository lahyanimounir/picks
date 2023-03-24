import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  choice:string = 'Ongoing'
  segments:string = 'Hotels'
  
  halfWidth = 0

  constructor() {
    this.halfWidth = window.screen.width / 2
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.halfWidth = window.screen.width / 2
  }

}
