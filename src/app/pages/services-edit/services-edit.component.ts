import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor, RegionType } from 'src/models/Ctor';
import { CtorRestService } from 'src/services/api/ctor.rest.service';
import { UiService } from 'src/services/ui.service';

@Component({
  selector: 'i-services-edit',
  templateUrl: './services-edit.component.html',
  styleUrls: ['./services-edit.component.scss'],
  animations: [titleAnimation]
})
export class ServicesEditComponent implements OnInit {
  tag = 'service';
  regions: RegionType[];
  ctorId: number;
  constructor(
    public ctorRest: CtorRestService,
    private uiService: UiService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.regions = ['Москва', 'Норильск'];
    this.ctorId = this.activatedRoute.snapshot.params['id'];
  }

  onSuccess(ctor: Ctor) {
    this.uiService.showSuccess(`Service ${ctor.title} was updated successfully`);
    setTimeout(() => {
      this.uiService.hideSuccess();
    }, 1000);
  }
}
