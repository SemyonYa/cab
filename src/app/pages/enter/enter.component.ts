import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { AuthRestService } from '../../../services/api/auth.rest.service';

@Component({
  selector: 'i-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(
    private authRest: AuthRestService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value);
    this.authRest.login(this.form.value)
      .subscribe(
        res => {
          console.log(res);
        },
        this.authRest.handleError
      )
  }

}
