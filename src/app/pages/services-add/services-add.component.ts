import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor, RegionType } from 'src/models/Ctor';
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
  region: RegionType;
  constructor(
    public ctorRest: CtorRestService,
    private uiService: UiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.region = this.activatedRoute.snapshot.params['region'] === 'moscow'
      ? 'Москва'
      : 'Норильск';
  }


  onSuccess(ctor: Ctor) {
    this.uiService.showSuccess(`Added new service ${ctor.title}`);
    setTimeout(() => {
      this.uiService.hideSuccess();
    }, 1000);
  }
}
