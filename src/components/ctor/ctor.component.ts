import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Image } from 'src/models/Image';
import { Ctor, CtorItem } from '../../models/Ctor';
import { CtorRestService } from '../../services/api/ctor.rest.service';

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
    thumbId: new FormControl(''),
    tag: new FormControl(''),
  });

  // get ctorItemFormsValid(): boolean {
  //   return this.ctor.items?.length > 0 ? this.ctor.items.map(c => !!c.value).reduce((prev, cur) => prev && cur) : true;
  // }

  get valid(): boolean {
    return (this.ctor.items?.length > 0 ? this.ctor.items.map(c => !!c.value).reduce((prev, cur) => prev && cur) : true) && this.form.valid;
  }

  constructor(private ctorRest: CtorRestService) { }

  ngOnInit(): void {
    this.ctor = new Ctor();
    this.ctor.items = [new CtorItem()];
    this.form.valueChanges
      .subscribe(
        values => {
          for (let key in values) {
            this.ctor[key] = values[key];
          }
        });
    this.form.updateValueAndValidity();
  }

  selectThumb(image: Image) {
    this.form.patchValue({ thumbId: image.id });
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
    this.ctorRest.post(this.ctor)
      .subscribe(
        res => {
          console.log(res);
        },
        this.ctorRest.handleError
      )
  }

}
