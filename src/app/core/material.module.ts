import { NgModule } from '@angular/core'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@NgModule({
    exports: [
      MatFormFieldModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatSidenavModule,
      MatDividerModule,
      MatToolbarModule,
      MatMenuModule,
      MatListModule,
      MatDialogModule,
      MatFormFieldModule,
      MatSelectModule,
      MatTableModule,
      MatPaginatorModule,
      MatCardModule, 
      MatProgressBarModule
    ]
})
  export class MaterialModule { }