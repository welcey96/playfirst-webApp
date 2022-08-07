import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @ViewChild('topbar', { static: true }) el!: ElementRef;
  @ViewChild('sideToggle', { static: true }) toggle!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() { }

  @HostListener('document:scroll', ['$event'])
  scrollfunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
      this.renderer.addClass(this.el.nativeElement, '__scrolled')
    else
      this.renderer.removeClass(this.el.nativeElement, '__scrolled')
  }


  toggleSideNav(){
    console.log('hre');
    
  }


}

