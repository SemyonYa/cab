import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss'],
  animations: [titleAnimation]
})
export class UsersAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
