import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-filials',
  templateUrl: './filials.component.html',
  styleUrls: ['./filials.component.scss'],
  animations: [titleAnimation]
})
export class FilialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
