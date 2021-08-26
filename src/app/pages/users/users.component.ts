import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';


@Component({
  selector: 'i-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [titleAnimation]
})
export class UsersComponent {

}
