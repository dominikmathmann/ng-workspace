import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from 'projects/common-ui/src/public-api';
import { CommonUIModule } from 'projects/common-ui/common-ui/common-ui.module';
import { DetailModule03 } from './modules/detail03/detail.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonUIModule,
    DetailModule03
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
