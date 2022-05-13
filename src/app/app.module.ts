import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordGeneratorComponent } from './components/password-generator/password-generator.component';
import { PaginationPhotoComponent } from './pagination-photo/pagination-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordGeneratorComponent,
    PaginationPhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
