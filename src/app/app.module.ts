import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IndexComponent } from './pages/index/index.component';
import { OpenSidebarOnSwipeDirective } from './directive/open-sidebar-on-swipe.directive';
import { SidebarSwipeService } from './services/sidebar-swipe.service';
import { SetGetWidthSidebarPipe } from './pipes/set-get-width-sidebar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    OpenSidebarOnSwipeDirective, 
    SetGetWidthSidebarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [SidebarSwipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
