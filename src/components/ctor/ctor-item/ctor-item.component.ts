import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CtorItem } from 'src/models/Ctor';
import { Image } from 'src/models/Image';

@Component({
  selector: 'i-ctor-item',
  templateUrl: './ctor-item.component.html',
  styleUrls: ['./ctor-item.component.scss']
})
export class CtorItemComponent implements OnInit {
  @Input() item: CtorItem;
  @Input() index: number;
  @Output() onAdd = new EventEmitter<CtorItem>();
  @Output() onRemove = new EventEmitter<number>();

  form: FormGroup = new FormGroup({
    type: new FormControl(CtorItemType.Text, [Validators.required]),
    value: new FormControl('', [Validators.required]),
  });
  types: string[] = [];

  get selectedType(): string {
    return this.form.get('type').value;
  }

  constructor() { }

  ngOnInit(): void {
    for (const key in CtorItemType) {
      this.types.push(CtorItemType[key]);
    }
    this.form.valueChanges
      .subscribe(
        values => {
          for (let key in values) {
            this.item[key] = values[key];
          }
        }
      );
  }

  selectThumb(image: Image) {
    this.form.patchValue({ value: image.id })
  }

  submit() {
    console.log(this.form.value);
  }

  add() {
    this.onAdd.emit(this.item)
  }

  remove() {
    this.onRemove.emit(this.index)
  }
}

export const CtorItemType: { [key: string]: string } = {
  Text: 'Text',
  Image: 'Image',
  H1: 'H1',
  H2: 'H2',
  List: 'List',
  Comment: 'Comment'
}
