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

  get ctorItemFormsValid(): boolean {
    return this.ctor.items?.length > 0 ? this.ctor.items.map(c => !!(c.value?.trim())).reduce((prev, cur) => prev && cur) : true;
  }

  constructor() { }

  ngOnInit(): void {
    this.ctor = new Ctor();
    this.ctor.items = null;
    setTimeout(() => {
      this.ctor.items = [new CtorItem()];
    }, 500);
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

  addItem(afterItem: CtorItem = null) {
    if (afterItem) {
      const afterItemIndex: number = this.ctor.items.indexOf(afterItem);
      this.ctor.items = [
        ...this.ctor.items.slice(0, afterItemIndex + 1),
        new CtorItem(),
        ...this.ctor.items.slice(afterItemIndex + 1)
      ];
    } else {
      this.ctor.items.push(new CtorItem());
    }
  }

  removeItem(index: number) {
    this.ctor.items.splice(index, 1);
  }

  submit() {
    console.log(this.form.value);
  }

}
