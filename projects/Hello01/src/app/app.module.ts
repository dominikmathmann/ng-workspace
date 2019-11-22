import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from 'projects/common-ui/src/public-api';
import { CommonUIModule } from 'projects/common-ui/common-ui/common-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
