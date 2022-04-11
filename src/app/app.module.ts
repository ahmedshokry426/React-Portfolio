import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterCompComponent } from './register-comp/register-comp.component';
import { StudentsCompComponent } from './students-comp/students-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterCompComponent,
    StudentsCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
