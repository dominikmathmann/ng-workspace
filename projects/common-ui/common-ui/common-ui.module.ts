import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../src/public-api';



@NgModule({
  declarations: [
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent
  ]
})
export class CommonUIModule { }
