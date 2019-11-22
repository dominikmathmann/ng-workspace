import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Detail02HomeComponent } from './home/home.component';
import { TitleComponent } from 'projects/common-ui/src/public-api';
import { CommonUIModule } from 'projects/common-ui/common-ui/common-ui.module';
import { CommonServiceModule } from 'projects/common-service/common-service/common-service.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './detail.routes';



@NgModule({
  declarations: [Detail02HomeComponent],
  imports: [
    CommonModule,
    CommonUIModule,
    CommonServiceModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    Detail02HomeComponent
  ]
})
export class DetailModule02 { }
