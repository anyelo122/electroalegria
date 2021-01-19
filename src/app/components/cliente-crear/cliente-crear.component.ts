import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-cliente-crear',
  templateUrl: './cliente-crear.component.html',
  styleUrls: ['./cliente-crear.component.scss']
})
export class ClienteCrearComponent implements OnInit {

  dataClient: FormGroup;	
  loading: boolean = false;
  comunac: any;
  ciudadd: any;
  errorPeticion: boolean = false;
  constructor(us: FormBuilder) {

  	this.dataClient = us.group({
      'email': ['', Validators.compose([
            Validators.required, Validators.email])],
      'nombre': ['', Validators.required],
      'rut': ['', Validators.required],
      'direccion': ['', Validators.required],
      'telefono': ['', Validators.compose([
      Validators.required, 
      Validators.pattern(/^[0-9]/), 
      Validators.minLength(8),
      Validators.maxLength(9)
      ])],
      'comuna': ['', Validators.required],
      'ciudad': ['', Validators.required]
      });

   }

  ngOnInit(): void {
  	this.comunac = [
  	{'id':1, 'name': 'Los yelos'},
  	{'id':2, 'name': 'perroculiao'},
  	{'id':3, 'name': 'que andai haciendo'}
  	];
  	this.ciudadd = [
  	{'id':1, 'name': 'La esquina'},
  	{'id':2, 'name': 'Santiago de Chile'},
  	{'id':3, 'name': 'Hola que hace'}
  	];
  }

  onSubmit(form: any):void {
  console.log('client has created sucessfully' + form);
  }

}
