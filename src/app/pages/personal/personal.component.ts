import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  animations: [titleAnimation]
})
export class PersonalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
