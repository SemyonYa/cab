import { Component, Input, OnInit } from '@angular/core';
import { modalAnimation } from 'src/animations/modal.animation';
import { UiService } from '../../../services/ui.service';

@Component({
  selector: 'i-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  animations: [modalAnimation]
})
export class ErrorComponent implements OnInit {
  text: string;

  constructor(private uiService: UiService) { }

  ngOnInit() {
    this.uiService.error$
      .subscribe(
        text => {
          this.text = text;
        }
      );
  }

  hide() {
    this.uiService.hideError();
  }

}
