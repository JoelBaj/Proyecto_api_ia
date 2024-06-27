import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';

import { PrincipalComponent } from './principal/principal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [

    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    SpinnerComponent
  ]
})
export class DashboardModule { }
