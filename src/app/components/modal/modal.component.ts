import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { pageAnimation } from 'src/animations/page.animation';
import { modalAnimation } from 'src/animations/modal.animation';

@Component({
  selector: 'i-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [pageAnimation, modalAnimation]
})
export class ModalComponent implements OnInit {
  @Output() onCancel = new EventEmitter();
  @Output() onOk = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  cancel() {
    this.onCancel.emit();
  }

  ok() {
    this.onOk.emit();
  }

  backClick(e: PointerEvent) {
    if (e.target['id'] === 'cab-i-modal-back') {
      this.cancel();
    }
  }
}
