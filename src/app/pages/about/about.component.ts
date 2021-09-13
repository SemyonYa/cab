import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor } from 'src/models/Ctor';
import { CtorRestService } from 'src/services/api/ctor.rest.service';
import { UiService } from 'src/services/ui.service';

@Component({
  selector: 'i-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [titleAnimation]
})
export class AboutComponent implements OnInit {

  constructor(
    public ctorRest: CtorRestService,
    private uiService: UiService,
  ) { }

  ngOnInit(): void {
  }

  onSuccess(ctor: Ctor) {
    this.uiService.showSuccess(`About page was updated successfully`);
    setTimeout(() => {
      this.uiService.hideSuccess();
    }, 1000);
  }

}
