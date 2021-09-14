import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor } from 'src/models/Ctor';
import { CtorRestService } from 'src/services/api/ctor.rest.service';
import { UiService } from 'src/services/ui.service';

@Component({
  selector: 'i-positions-edit',
  templateUrl: './positions-edit.component.html',
  styleUrls: ['./positions-edit.component.scss'],
  animations: [titleAnimation]
})
export class PositionsEditComponent implements OnInit {
  tag = 'position';
  ctorId: number;
  constructor(
    public ctorRest: CtorRestService,
    private uiService: UiService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ctorId = this.activatedRoute.snapshot.params['id'];
  }

  onSuccess(ctor: Ctor) {
    this.uiService.showSuccess(`Position ${ctor.title} was updated successfully`);
    setTimeout(() => {
      this.uiService.hideSuccess();
    }, 1000);
  }
}
