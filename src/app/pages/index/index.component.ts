import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SidebarSwipeService } from '../../services/sidebar-swipe.service';
import { SetGetWidthSidebarPipe } from '../../pipes/set-get-width-sidebar.pipe';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers : [SetGetWidthSidebarPipe]
})
export class IndexComponent implements OnInit {
	width?: number;
  constructor(private cdr: ChangeDetectorRef, private sidebarService: SidebarSwipeService) { }

  ngOnInit(): void {
  }
	setWidth(widthNumber: number){
    this.width = widthNumber;
    this.cdr.detectChanges();
  }
  hamburger(): void {
       const open: any = document.querySelector(".nav-links");
       open?.classList.toggle('open');
       const primero: any = document.getElementById("primero");
       primero?.classList.toggle('primero');
       const segundo: any = document.getElementById("segundo");
       	segundo?.classList.toggle('segundo');
       const tercero: any = document.getElementById("tercero");
       	tercero?.classList.toggle('tercero');
       const cuarto  = document.querySelectorAll(".nav-links li");
       cuarto?.forEach(link => {
           link.classList.toggle('fade');
       });        
    }
}
