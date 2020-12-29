import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
	servicios: any;
  constructor() { 
this.servicios = [
  	{'image':'/assets/icon.png', 'alt':'una imagen de un candado', 'name':'calidad', 'parrafo':'un servicio con buena calidad y mucho más'},
  	{'image':'assets/icon.png', 'alt':'una imagen de un candado', 'name':'seguridad', 'parrafo':'un servicio con buena seguridad y mucho más'},
  	{'image':'assets/icon.png', 'alt':'una imagen de un candado', 'name':'calidad', 'parrafo':'un servicio con buena calidad y mucho más'},
  	{'image':'assets/icon.png', 'alt':'una imagen de un candado', 'name':'seguridad', 'parrafo':'un servicio con buena seguridad y mucho más'}
  	];
  }

  ngOnInit(): void {

  }

}
