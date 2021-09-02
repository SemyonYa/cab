import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.TOKEN) {
      this.router.navigateByUrl('/home');
    }
  }

  submit() {
    console.log(this.form.value);
    this.authRest.post(this.form.value)
      .subscribe(
        token => {
          this.authService.login(token);
          this.router.navigateByUrl('/home')
          console.log(token);
        },
        this.authRest.handleError
      )
  }

}
