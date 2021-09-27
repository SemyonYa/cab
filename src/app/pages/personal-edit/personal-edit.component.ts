import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor, RegionType } from 'src/models/Ctor';
import { CtorRestService } from 'src/services/api/ctor.rest.service';
import { UiService } from 'src/services/ui.service';

@Component({
  selector: 'i-personal-edit',
  templateUrl: './personal-edit.component.html',
  styleUrls: ['./personal-edit.component.scss'],
  animations: [titleAnimation]
})
export class PersonalEditComponent implements OnInit {
  tag = 'personal';
  regions: RegionType[];
  ctorId: number;
  constructor(
    public ctorRest: CtorRestService,
    private uiService: UiService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ctorId = this.activatedRoute.snapshot.params['id'];
    this.regions = ['Москва', 'Норильск'];
  }

  onSuccess(ctor: Ctor) {
    this.uiService.showSuccess(`Person ${ctor.title} was updated successfully`);
    setTimeout(() => {
      this.uiService.hideSuccess();
    }, 1000);
  }
}
