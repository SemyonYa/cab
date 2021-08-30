import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CtorItem } from 'src/models/Ctor';

@Component({
  selector: 'i-ctor-item',
  templateUrl: './ctor-item.component.html',
  styleUrls: ['./ctor-item.component.scss']
})
export class CtorItemComponent implements OnInit {
  @Input() item: CtorItem;
  @Output() onAdd = new EventEmitter<CtorItem>();
  // @Output() onSave = new EventEmitter<CtorItem>();

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

  submit() {
    console.log(this.form.value);
    // ???? as link 
    // this.onSave.emit(this.form.value as CtorItem);
  }

  add() {
    this.onAdd.emit(this.item)
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
