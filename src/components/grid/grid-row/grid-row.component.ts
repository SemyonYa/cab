import { Component, Input, OnInit, Output } from '@angular/core';
import { formatDate } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'i-grid-row',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.scss']
})
export class GridRowComponent<T extends { id: string }> implements OnInit {
  @Input() item: T;
  @Input() withEdit: boolean;
  @Input() withDelete: boolean;
  @Input() exclude: string[] = [];
  @Output() onEdit = new EventEmitter<string>();
  @Output() onDelete = new EventEmitter<string>();

  itemAsArray: (string | number)[] = [];

  ngOnInit(): void {
    for (let key in this.item) {
      const field = this.item[key];
      if (!this.exclude.includes(key)) {
        if (typeof field === 'number' || typeof field === 'string') {
          this.itemAsArray.push(field)
        } else if (typeof field === 'boolean') {
          this.itemAsArray.push(field.toString())
        } else if (typeof field === 'object') {
          if (field instanceof Date) {
            this.itemAsArray.push(formatDate(field, 'dd.MM.y HH:mm', 'en-EN'));
          }
        }
      }
    }
  }

  edit() {
    this.onEdit.emit(this.item.id);
  }

  delete() {
    this.onDelete.emit(this.item.id);
  }
}
