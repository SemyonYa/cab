import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { titleAnimation } from 'src/animations/title.animation';
import { User } from 'src/models/user';
import { UserRestService } from 'src/services/api/user.rest.service';
import { UiService } from 'src/services/ui.service';

@Component({
  selector: 'i-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss'],
  animations: [titleAnimation]
})
export class UsersAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    'login': new FormControl('qwe', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+$/)]),
    'firstName': new FormControl('qwe', [Validators.required]),
    'lastName': new FormControl('qwe', [Validators.required]),
    'role': new FormControl('user', [Validators.required]),
    'birth': new FormControl('2020-12-01', [Validators.required, Validators.pattern(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)]),
    'activated': new FormControl(true),
  });

  constructor(
    private userRest: UserRestService,
    private router: Router,
    private uiService: UiService
  ) { }

  ngOnInit(): void {
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
          // console.log(res);
        },
        this.userRest.handleError
      );
  }

  // formValueToSnake(formValue: any) {
  //   let newValue = {};
  //   console.log(typeof formValue['activated'] === 'boolean');

  //   for (let key in formValue) {
  //     newValue[this.toSnake(key)] = (typeof formValue[key] === 'boolean')
  //       ? 1
  //       : formValue[key]
  //   }
  //   return newValue;
  // }

  // toSnake(s: string): string {
  //   return s.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  // }

}
