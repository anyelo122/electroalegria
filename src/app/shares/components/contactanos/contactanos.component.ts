import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnInit {
	dataContact: FormGroup;
	metodoc: any;
  loading: boolean = true; 
  constructor(us: FormBuilder) {
  this.dataContact = us.group({
      'correo': ['', Validators.compose([
            Validators.required, Validators.email])],
      'nombrecompleto': ['', Validators.required],
      'metodo': ['', Validators.required],
      'telefono': ['', Validators.compose([
      Validators.required, Validators.pattern(/^[0-9]\d{8,9}$/)
      ])],
      'asunto': ['', Validators.required],
      'observaciones': ['', Validators.required]
      });
   }

  ngOnInit(): void {
  	this.metodoc = [
  		{'id':1, 'name':'Whatsapp'},
  		{'id':2, 'name':'Llamada'},
  		{'id':3, 'name':'SMS'},
  		{'id':4, 'name':'Correo Electrónico'}
  	];
  }

  getErrorMessageNombre():string {
    if (this.dataContact.controls['nombrecompleto'].hasError('required')) {
      return 'Debes escribir tu nombre';
    } else {
      return '';
    }
   }

  getErrorMessageCorreo(): string {
    if (this.dataContact.controls['correo'].hasError('required')) {
      return 'Debes escribir un correo';
    }
    return this.dataContact.controls['correo'].hasError('email') ? 'No es un correo electrónico válido' : '';
  }
  getErrorMessageMetodo(): string {
  if(this.dataContact.controls['metodo'].hasError('required')) {
    return 'Debes seleccionar un método';
  } else {
    return '';
   }
  } 

  getErrorMessageTelefono(): string {
    if(this.dataContact.controls['telefono'].hasError('required')) {
      return 'Número de teléfono es requerido';
    } else if(this.dataContact.controls['telefono'].hasError('pattern')) {
      return 'Sólo se permiten números';
    } else {
      return '';
    }
  }
  getErrorMessageObservaciones():string { 
  if(this.dataContact.controls['observaciones'].hasError('required')) {
    return 'Debes seleccionar un método';
  } else {
    return '';
   }
  }

  onSubmit(form: any){
  console.log(form);
  }
  

}
