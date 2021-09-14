import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor } from 'src/models/Ctor';
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
  constructor(
    public ctorRest: CtorRestService,
    private uiService: UiService
  ) { }

  ngOnInit(): void {
  }


  onSuccess(ctor: Ctor) {
    this.uiService.showSuccess(`Added new person ${ctor.title}`);
    setTimeout(() => {
      this.uiService.hideSuccess();
    }, 1000);
  }

}
