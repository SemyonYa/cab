import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { titleAnimation } from 'src/animations/title.animation';
import { passwordValidator } from 'src/app/validators/password-validator';
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
  form: FormGroup;

  constructor(private userRest: UserRestService) { }

  ngOnInit(): void {
    this.userRest.getProfile()
      .subscribe(
        item => {
          console.log(item);

          // this.user = u;
          // this.generateForm();
        },
        this.userRest.handleError
      );
  }

  private generateForm() {
    this.form = new FormGroup({
      'login': new FormControl(this.user.login, [Validators.required, Validators.pattern(/^[A-Za-z0-9]+$/)]),
      'firstName': new FormControl(this.user.firstName, [Validators.required]),
      'lastName': new FormControl(this.user.lastName, [Validators.required]),
      'role': new FormControl(this.user.role, [Validators.required]),
      'birth': new FormControl(this.user.birth, [Validators.required, Validators.pattern(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)]),
      'activated': new FormControl(this.user.activated),
      'password': new FormControl(''),
      'passwordConfirm': new FormControl(''),
    }, passwordValidator);
  }

  submit() {
    console.log(this.form.value);

  }

}
