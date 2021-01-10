import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IndexComponent } from './pages/index/index.component';
import { OpenSidebarOnSwipeDirective } from './directive/open-sidebar-on-swipe.directive';
import { SidebarSwipeService } from './services/sidebar-swipe.service';
import { SetGetWidthSidebarPipe } from './pipes/set-get-width-sidebar.pipe';
import { InicioComponent } from './shares/components/inicio/inicio.component';
import { ServicesComponent } from './shares/components/services/services.component';
import { FooterComponent } from './shares/components/footer/footer.component';
import { QuienesSomosComponent } from './shares/components/quienes-somos/quienes-somos.component';
import { ContactanosComponent } from './shares/components/contactanos/contactanos.component';
import { UbicacionComponent } from './shares/components/ubicacion/ubicacion.component';
import { ModalContactComponent } from './shares/components/modal-contact/modal-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    OpenSidebarOnSwipeDirective, 
    SetGetWidthSidebarPipe, 
    InicioComponent, 
    ServicesComponent, 
    FooterComponent, 
    QuienesSomosComponent, 
    ContactanosComponent,
    ModalContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [ModalContactComponent],
  providers: [SidebarSwipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
