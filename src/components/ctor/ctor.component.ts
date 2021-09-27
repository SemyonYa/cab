import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Image } from 'src/models/Image';
import { Ctor, CtorItem, RegionType } from '../../models/Ctor';
import { CtorRestService } from '../../services/api/ctor.rest.service';

@Component({
  selector: 'i-ctor',
  templateUrl: './ctor.component.html',
  styleUrls: ['./ctor.component.scss']
})
export class CtorComponent implements OnInit {
  @Input() ctorId: number = null;
  @Input() ctorRest: CtorRestService;
  @Input() tag: string;
  @Input() region: string;
  @Input() fields: string[];
  @Input() withItems: boolean = true;
  @Input() regions: RegionType[];
  @Output() onSuccess = new EventEmitter<Ctor>();
  ctor: Ctor;
  form: FormGroup;

  get valid(): boolean {
    return (this.ctor?.items?.length > 0 ? this.ctor?.items.map(c => !!c.value).reduce((acc, next) => acc && next, true) : true) && this.form.valid;
  }

  ngOnInit(): void {
    if (this.ctorId) {
      this.ctorRest.get(this.ctorId)
        .subscribe(
          item => {
            this.ctor = item;
            this.generateForm();
            this.valueChangesSubscription();
          },
          this.ctorRest.handleError,
        );
    } else {
      this.ctor = new Ctor();
      this.generateForm();
      this.valueChangesSubscription();
    }

    // this.form.updateValueAndValidity();
  }

  valueChangesSubscription() {
    this.form.valueChanges
      .subscribe(
        values => {
          if (this.ctor) {
            for (let key in values) {
              this.ctor[key] = values[key];
            }
          }
        });
  }

  private generateForm() {
    this.form = new FormGroup({
      title: new FormControl(this.ctor?.title ?? '', [Validators.required]),
      subtitle: new FormControl(this.ctor?.subtitle ?? ''),
      description: new FormControl(this.ctor?.description ?? ''),
      price: new FormControl(this.ctor?.price ?? 0),
      createdAt: new FormControl(this.ctor?.createdAt?.toString()?.replace(' ', 'T') ?? formatDate(new Date(), 'y-MM-ddTHH:mm', 'en-EN')),
      authorName: new FormControl(this.ctor?.authorName ?? ''),
      thumbId: new FormControl(this.ctor?.thumbId ?? ''),
      tag: new FormControl(this.ctor?.tag ?? this.tag ?? ''),
      region: new FormControl(this.ctor?.region ?? this.region ?? ''),
      isActive: new FormControl(this.ctor.isActive),
    });
  }

  selectThumb(image: Image) {
    this.form.patchValue({ thumbId: image.id });
  }

  toggleActivity(value: boolean) {
    this.form.patchValue({})
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
    console.log("🚀 ~ file: ctor.component.ts ~ line 105 ~ CtorComponent ~ submit ~ this.ctor", this.ctor)
    if (!this.ctor?.id) {
      this.ctorRest.post(this.ctor)
        .subscribe(
          item => {
            item.items = [];
            this.updateCtor(item);
          },
          this.ctorRest.handleError,
          () => {
            this.onSuccess.emit(this.ctor);
          }
        );
    } else {
      const items = [...this.ctor.items];
      this.ctorRest.put(this.ctor, this.ctor.id)
        .subscribe(
          item => {
            this.updateCtor(item);
            this.saveChildren(items, this.ctor.id);
          },
          this.ctorRest.handleError,
          () => {
            this.onSuccess.emit(this.ctor);
          }
        );
    }
  }

  updateCtor(ctor: Ctor) {
    for (let key in ctor) {
      if (key !== 'items') {
        this.ctor[key] = ctor[key];
      }
    }
  }

  saveChildren(items: CtorItem[], ctorId: number) {
    this.ctorRest.postChildren(items, ctorId)
      .subscribe(
        items => {
          this.ctor.items = items;
        },
        this.ctorRest.handleError,
        () => {
          this.onSuccess.emit(this.ctor);
        }
      );
  }
}

export interface CtorConfig {
  /**
   * For edit form. 
   */
  ctorId?: number;
  /**
   * REST API for Ctor model
   */
  ctorRest: CtorRestService;
  tag: string;
  /**
   * TODO: 
   */
  fields: string[];
  /** 
   * For element whithout ctorItem list. 
   * For example, person CRUD. 
   * Default value - false 
   * */
  withItems?: boolean;
  /** 
   * ???? 
   * */
  region: RegionType;
  /** 
   * Region list for select. 
   * If field is undefined, ui element is invisible. 
   * */
  regions?: RegionType[];
}
