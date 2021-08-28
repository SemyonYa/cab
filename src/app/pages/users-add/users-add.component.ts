import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss'],
  animations: [titleAnimation]
})
export class UsersAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    'login': new FormControl('login'),
    'name': new FormControl('name'),
    'role': new FormControl('role'),
    'age': new FormControl('age'),
    'birth': new FormControl('birth'),
  });
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form);
  }

}
