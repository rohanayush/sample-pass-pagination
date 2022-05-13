import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordGeneratorComponent } from './password-generator.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PasswordGeneratorComponent
  ]
})
export class PasswordGeneratorModule { }
