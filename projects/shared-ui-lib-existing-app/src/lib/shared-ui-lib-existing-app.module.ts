import { NgModule } from '@angular/core';
import { SharedUiLibExistingAppComponent } from './shared-ui-lib-existing-app.component';
import { SampleButtonComponent } from './components/sample-button/sample-button.component';



@NgModule({
  declarations: [
    SharedUiLibExistingAppComponent,
    SampleButtonComponent
  ],
  imports: [
  ],
  exports: [
    SharedUiLibExistingAppComponent,
    SampleButtonComponent
  ]
})
export class SharedUiLibExistingAppModule { }
