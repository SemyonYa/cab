import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor } from 'src/models/Ctor';
import { CtorRestService } from 'src/services/api/ctor.rest.service';
import { UiService } from 'src/services/ui.service';

@Component({
  selector: 'i-services-add',
  templateUrl: './services-add.component.html',
  styleUrls: ['./services-add.component.scss'],
  animations: [titleAnimation]
})
export class ServicesAddComponent implements OnInit {
  tag = 'service';
  constructor(
    public ctorRest: CtorRestService,
    private uiService: UiService
  ) { }

  ngOnInit(): void {
  }


  onSuccess(ctor: Ctor) {
    this.uiService.showSuccess(`Added new service ${ctor.title}`);
    setTimeout(() => {
      this.uiService.hideSuccess();
    }, 1000);
  }
}
