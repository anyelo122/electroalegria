import { Directive, HostBinding, Output, EventEmitter, ChangeDetectorRef, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Directive({
  selector: '[appOpenSidebarOnSwipe]'
})

export class OpenSidebarOnSwipeDirective {
  
  @HostBinding('style.width') width: any;
  @Output() setWidth: EventEmitter<number> = new EventEmitter<number>();


  constructor() { 
    console.log('directive');
    
  }
  ngAfterViewInit(){
    this.setWidth.emit(80);
  }

}