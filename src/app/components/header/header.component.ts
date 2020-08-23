import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  innerWidth: string;

  constructor(@Inject (DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  navebarOpen = false;
  toggleNavbar() {
    this.navebarOpen = !this.navebarOpen;
  }

  

  @HostListener('window:scroll', [])

  onWindowScroll(event:Event){
      if(document.body.scrollTop > 30 ||
         document.documentElement.scrollTop > 30){
           document.getElementById ('nav').classList.add('nav-fixed');
         }
         else{
          document.getElementById ('nav').classList.remove('nav-fixed');
          this.innerWidth = 'auto';
         }
  }

}
