import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { titleAnimation } from 'src/animations/title.animation';
import { UserRestService } from 'src/services/api/user.rest.service';
import { UiService } from 'src/services/ui.service';
import { passwordValidator } from '../../validators/password-validator';

@Component({
  selector: 'i-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss'],
  animations: [titleAnimation]
})
export class UsersAddComponent implements OnInit {
  form: FormGroup;

  constructor(
    private userRest: UserRestService,
    private router: Router,
    private uiService: UiService
  ) { }

  // private passwordValidator: ValidatorFn = (fg) => {
  //   if ((fg.get('password').value as string).trim() != (fg.get('passwordConfirm').value as string).trim()) {
  //     return { password: true };
  //   }
  //   return null;
  // };


  private generateForm() {
    this.form = new FormGroup({
      'login': new FormControl('qwe', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+$/)]),
      'firstName': new FormControl('qwe', [Validators.required]),
      'lastName': new FormControl('qwe', [Validators.required]),
      'role': new FormControl('user', [Validators.required]),
      'birth': new FormControl('2020-12-01', [Validators.required, Validators.pattern(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)]),
      'activated': new FormControl(true),
      'password': new FormControl('', [Validators.required]),
      'passwordConfirm': new FormControl('', [Validators.required]),
    }, passwordValidator);
  }

  ngOnInit(): void {
    this.generateForm()
  }

  submit() {
    console.log(this.form);
    this.userRest.post(this.form.value)
      .subscribe(
        (res) => {
          this.userRest.getAll();
          this.uiService.showSuccess();
          setTimeout(() => {
            this.uiService.hideSuccess();
            this.router.navigateByUrl('/users');
          }, 500);
        },
        this.userRest.handleError
      );
  }
}
