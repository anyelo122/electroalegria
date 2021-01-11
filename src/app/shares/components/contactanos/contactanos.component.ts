import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { ContactanosService } from '../../../services/contactanos.service';
import { ModalContactComponent } from '../modal-contact/modal-contact.component'
@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnInit {
	dataContact: FormGroup;
	metodoc: any;
  loading: boolean = false; 
  @ViewChild('nombre', {static: true}) nombre: ElementRef;
  @ViewChild('correo', {static: true}) correo: ElementRef;
  @ViewChild('telefono', {static: true}) telefono: ElementRef;
  @ViewChild('metodo', {static: true}) metodo: ElementRef;
  @ViewChild('observaciones', {static: true}) observaciones: ElementRef;
  constructor(us: FormBuilder, contactService: ContactanosService,private dialog: MatDialog) {
  this.dataContact = us.group({
      'correo': ['', Validators.compose([
            Validators.required, Validators.email])],
      'nombrecompleto': ['', Validators.required],
      'metodo': ['', Validators.required],
      'telefono': ['', Validators.compose([
      Validators.required, 
      Validators.pattern(/^[0-9]/), 
      Validators.minLength(8),
      Validators.maxLength(9)
      ])],
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
    } else if(this.dataContact.controls['telefono'].hasError('minLength')) {
      return 'Deben ser mínimo 8 dígitos';
    } else if(this.dataContact.controls['telefono'].hasError('maxLength')){
      return 'Deben ser máximo 9 dígitos';
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
  this.loading = true;
  const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
    dialogConfig.data = {
        nombre: form.nombrecompleto
     };
    const dialogRef = this.dialog.open(ModalContactComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        (data:any) => this.whenDataIsComing(data)
    );


  /* this.contactService.sendContact(form).statusubscribe((res: any) => {
     console.log(res);
      this.loading = false; 
    }, (err) => {
     console.log(err + " hey");
    }); */

  }
  

   whenDataIsComing(data: any){
      console.log('llegó');
     this.loading = false; 
     this.nombre.nativeElement.value = '';
     this.correo.nativeElement.value = '';

     this.telefono.nativeElement.value = '';

     this.metodo.nativeElement.value = '';

     this.observaciones.nativeElement.value = '';
     /* this.dataContact.controls['metodo'].setValue('');
     this.dataContact.controls['telefono'].setValue('');
     this.dataContact.controls['observaciones'].setValue(''); */
    } 

}
