import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
