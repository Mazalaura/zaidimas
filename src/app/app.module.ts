import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UzdaviniaiComponent } from './uzdaviniai/uzdaviniai.component';

@NgModule({
  declarations: [
    AppComponent,
    UzdaviniaiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
