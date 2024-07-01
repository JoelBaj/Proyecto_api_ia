import { NgModule } from '@angular/core';

import { SpinnerComponent } from './pages/spinner/spinner.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './pages/principal/principal.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    SpinnerComponent,
    PrincipalComponent
  ]
})
export class DashboardModule { }
