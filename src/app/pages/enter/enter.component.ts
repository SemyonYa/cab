import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private authRest: AuthRestService) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value);
    this.authRest.post(this.form.value)
      .subscribe(
        res => {
          console.log(res);
        },
        this.authRest.handleError
      )
  }

}
