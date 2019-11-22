import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Detail03HomeComponent } from './home/home.component';
import { TitleComponent } from 'projects/common-ui/src/public-api';
import { CommonUIModule } from 'projects/common-ui/common-ui/common-ui.module';
import { CommonServiceModule } from 'projects/common-service/common-service/common-service.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [Detail03HomeComponent],
  imports: [
    CommonModule,
    CommonUIModule,
    CommonServiceModule
  ],
  exports: [
    Detail03HomeComponent
  ]
})
export class DetailModule03 { }
