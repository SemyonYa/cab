import { Component, Input, OnInit } from '@angular/core';
import { titleAnimation } from '../../../animations/title.animation';

@Component({
  selector: 'i-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [titleAnimation]
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
