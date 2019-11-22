import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

  @Input()
  message: string;

}
