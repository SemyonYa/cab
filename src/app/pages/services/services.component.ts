import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [titleAnimation]
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
