import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';
import { User } from 'src/models/user';
import { UserRestService } from 'src/services/api/user.rest.service';
import { pageAnimation } from '../../../animations/page.animation';

@Component({
  selector: 'i-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [pageAnimation, titleAnimation]
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private userRest: UserRestService) { }

  ngOnInit(): void {
    this.userRest.get(1)
      .subscribe(
        u => {
          this.user = u;
        },
        this.userRest.handleError
      );
  }

}
