import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { titleAnimation } from 'src/animations/title.animation';
import { passwordValidator } from 'src/app/validators/password-validator';
import { User } from 'src/models/user';
import { UserRestService } from 'src/services/api/user.rest.service';
import { UiService } from 'src/services/ui.service';

@Component({
  selector: 'i-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss'],
  animations: [titleAnimation]
})
export class UsersEditComponent implements OnInit {
  id: number;
  user: User;
  form: FormGroup;
  
  constructor(
    private userRest: UserRestService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private uiService: UiService,
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.userRest.get(this.id)
      .subscribe(
        item => {
          this.user = item;
          this.generateForm();
        }
      )
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
    this.userRest.put(this.form.value, this.id)
      .subscribe(
        (res) => {
          this.userRest.getAll();
          this.uiService.showSuccess();
          setTimeout(() => {
            this.uiService.hideSuccess();
            this.router.navigateByUrl('/users');
          }, 500);
          // console.log(res);
        },
        this.userRest.handleError
      );
  }

}
