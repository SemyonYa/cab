import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-users-locked',
  templateUrl: './users-locked.component.html',
  styleUrls: ['./users-locked.component.scss'],
  animations: [titleAnimation]
})
export class UsersLockedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
