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


  getErrorMessageNombre():string {
    if (this.dataClient.controls['nombre'].hasError('required')) {
      return 'Debes escribir el nombre del cliente';
    } else {
      return '';
    }
   }


   getErrorMessageRut():string {
    if (this.dataClient.controls['rut'].hasError('required')) {
      return 'Debes escribir el rut';
    } else {
      return '';
    }
   }

   getErrorMessageDireccion():string {
    if (this.dataClient.controls['direccion'].hasError('required')) {
      return 'Debes escribir una dirección';
    } else {
      return '';
    }
   }
  

   getErrorMessageComuna():string {
    if (this.dataClient.controls['comuna'].hasError('required')) {
      return 'Debes seleccionar una comuna';
    } else {
      return '';
    }
   }

   getErrorMessageCiudad():string {
    if (this.dataClient.controls['ciudad'].hasError('required')) {
      return 'Debes seleccionar una ciudad';
    } else {
      return '';
    }
   }

  getErrorMessageEmail(): string {
    if (this.dataClient.controls['email'].hasError('required')) {
      return 'Debes escribir un correo';
    }
    return this.dataClient.controls['correo'].hasError('email') ? 'No es un correo electrónico válido' : '';
  }

  getErrorMessageTelefono(): string {
    if(this.dataClient.controls['telefono'].hasError('required')) {
      return 'Número de teléfono es requerido';
    } else if(this.dataClient.controls['telefono'].hasError('pattern')) {
      return 'Sólo se permiten números';
    } else if(this.dataClient.controls['telefono'].hasError('minLength')) {
      return 'Deben ser mínimo 8 dígitos';
    } else if(this.dataClient.controls['telefono'].hasError('maxLength')){
      return 'Deben ser máximo 9 dígitos';
    } else {
      return '';
    }
  }


}
