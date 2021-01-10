import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.scss']
})
export class ModalContactComponent  {

	nombre: string;
  constructor(private dialogRef: MatDialogRef<ModalContactComponent>,
        @Inject(MAT_DIALOG_DATA) data:any) { 
        this.nombre = data.nombre;
        }


close() {
        this.dialogRef.close();
    }
}
