import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() ctor: Ctor = null;
  @Input() ctorRest: CtorRestService;
  @Output() onUpdateCtor = new EventEmitter<Ctor>();

  form: FormGroup = new FormGroup({
    title: new FormControl(this.ctor?.title ?? '', [Validators.required]),
    subtitle: new FormControl(this.ctor?.subtitle ?? ''),
    createdAt: new FormControl(this.ctor?.createdAt ?? ''),
    authorName: new FormControl(this.ctor?.authorName ?? ''),
    thumbId: new FormControl(this.ctor?.thumbId ?? ''),
    tag: new FormControl(this.ctor?.tag ?? ''),
  });

  get valid(): boolean {
    return (this.ctor.items?.length > 0 ? this.ctor.items.map(c => !!c.value).reduce((acc, next) => acc && next, true) : true) && this.form.valid;
  }

  // constructor(private ctorRest: CtorRestService) { }

  ngOnInit(): void {
    // this.ctor = new Ctor();
    // this.ctor.items = [new CtorItem()];
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
    if (!this.ctor?.id) {
      return;
    }

    if (afterItem) {
      const afterItemIndex: number = this.ctor.items.indexOf(afterItem);
      this.ctor.items = [
        ...this.ctor.items.slice(0, afterItemIndex + 1),
        new CtorItem(this.ctor.id),
        ...this.ctor.items.slice(afterItemIndex + 1)
      ];
    } else {
      this.ctor.items.push(new CtorItem(this.ctor.id));
    }

  }

  removeItem(index: number) {
    this.ctor.items.splice(index, 1);
  }

  submit() {
    console.log(this.ctor)
    if (!this.ctor?.id) {
      this.ctorRest.post(this.ctor)
        .subscribe(
          item => {
            item.items = [];
            this.onUpdateCtor.emit(item)
            console.log(item);
          },
          this.ctorRest.handleError
        );
    } else {
      const items = [...this.ctor.items];
      this.ctorRest.put(this.ctor, this.ctor.id)
        .subscribe(
          item => {
            this.onUpdateCtor.emit(item)
            this.saveChildren(items, this.ctor.id);
            console.log(item);
          },
          this.ctorRest.handleError
        );
    }
  }

  saveChildren(items: CtorItem[], ctorId: number) {
    this.ctorRest.postChildren(items, ctorId)
      .subscribe(
        items => {
          console.log(items);
        },
        this.ctorRest.handleError,
      );
  }

}
