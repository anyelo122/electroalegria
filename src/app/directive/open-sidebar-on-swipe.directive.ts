import { Directive, HostBinding, Output, EventEmitter, ChangeDetectorRef, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Directive({
  selector: '[appOpenSidebarOnSwipe]'
})

export class OpenSidebarOnSwipeDirective {
  
  @HostBinding('style.width') width: any;
  @Output() setWidth: EventEmitter<number> = new EventEmitter<number>();



 /* sidebar?: MatSidenav;
@HostBinding('style.width') width: any;
@Input('sideNav') set sideNav(sideNav: MatSidenav){
  this.sidebar = sideNav;
}*/


  constructor() { 
    console.log('directive');
    
  }
  ngAfterViewInit(){
    this.setWidth.emit(80);
   /* this.startOnTouch(); 
    this.startTouchMove();
    this.touchEnd(); */

  }
  /*
startOnTouch(): void {
  fromEvent(document, 'touchstart').pipe(

    tap((e: TouchEvent) => e.touches[0].clientX <=20 && e.touches[0].clientY >= 65 ? (this.sidebar.open(),
          this.startTime = new Date().getTime(), 
          this.startX = e.touches[0].clientX, this.setWidth.emit (e.touches[0].clientX)) : '' )).subscribe();
}

startTouchMove(): void {
  fromEvent(document, 'touchmove').pipe (
    debounceTime(0)).subscribe((e:TouchEvent) => {
      this.endTime = new Date().getTime();
      let speed = Math.abs(e.touches[0].clientX - this.startX) / (this.endTime - this.startTime);
      this.sidebar._width > 40 ? this.setWidth.emit(80) :  '';
      let w = this.sidebar._width;
      this.sidebar._width <= 79 ? this.setWidth.emit ( w += (0.5 + speed)) : '';
    });
}
  touchEnd():void { 
    fromEvent(document, 'touchend').subscribe(() => {
      this.sidebar._width < 40 ? this.sidebar.close() :  '';
    });
  }) */
}