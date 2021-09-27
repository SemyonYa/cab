import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor, RegionType } from 'src/models/Ctor';
import { CtorRestService } from 'src/services/api/ctor.rest.service';
import { UiService } from 'src/services/ui.service';

@Component({
  selector: 'i-personal-add',
  templateUrl: './personal-add.component.html',
  styleUrls: ['./personal-add.component.scss'],
  animations: [titleAnimation]
})
export class PersonalAddComponent implements OnInit {
  tag = 'personal';
  region: RegionType;
  regions: RegionType[];

  constructor(
    public ctorRest: CtorRestService,
    private uiService: UiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.regions = ['Москва', 'Норильск'];
    this.region = this.activatedRoute.snapshot.params['region']
      ? this.activatedRoute.snapshot.params['region'] === 'moscow'
        ? 'Москва'
        : 'Норильск'
      : null;
  }

  onSuccess(ctor: Ctor) {
    this.uiService.showSuccess(`Added new person ${ctor.title}`);
    setTimeout(() => {
      this.uiService.hideSuccess();
    }, 1000);
  }

}
