import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './Dashboard/principal/principal.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './Dashboard/spinner/spinner.component';
import { DashboardModule } from './Dashboard/dashboard.module';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    PrincipalComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
