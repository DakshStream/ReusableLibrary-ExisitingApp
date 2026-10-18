import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedUiLibExistingAppModule } from 'shared-ui-lib-existing-app';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedUiLibExistingAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
