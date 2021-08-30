import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ctor, CtorItem } from '../../models/Ctor';

@Component({
  selector: 'i-ctor',
  templateUrl: './ctor.component.html',
  styleUrls: ['./ctor.component.scss']
})
export class CtorComponent implements OnInit {
  ctor: Ctor;

  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    subtitle: new FormControl(''),
    createdAt: new FormControl(),
    authorName: new FormControl(''),
    thumb: new FormControl(''),
    tag: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
    this.ctor = new Ctor();
    this.form.valueChanges
      .subscribe(
        values => {
          for (let key in values) {
            this.ctor[key] = values[key];
          }
          console.log(values);
          console.log(this.ctor);
        });
  }

  addItem(item: CtorItem) {
    this.ctor.items.push(new CtorItem());
  }

  removeItem(item: CtorItem) {
    console.log('REMOVE', item);

  }

  submit() {
    console.log(this.form.value);
  }

}
