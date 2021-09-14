import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss'],
  animations: [titleAnimation]
})
export class PositionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
