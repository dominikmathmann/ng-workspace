import { Component, OnInit } from '@angular/core';
import { MessageService } from 'projects/common-service/src/public-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class Detail02HomeComponent {

  constructor(public messsageSevice: MessageService) { }

  get msg() {
    return this.messsageSevice.getHello();
  }
}
