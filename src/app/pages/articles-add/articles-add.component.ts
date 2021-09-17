import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor } from 'src/models/Ctor';
import { CtorRestService } from 'src/services/api/ctor.rest.service';
import { UiService } from 'src/services/ui.service';

@Component({
  selector: 'i-articles-add',
  templateUrl: './articles-add.component.html',
  styleUrls: ['./articles-add.component.scss'],
  animations: [titleAnimation]
})
export class ArticlesAddComponent implements OnInit {
  tag = 'article';

  constructor(
    public ctorRest: CtorRestService,
    private uiService: UiService
  ) { }

  ngOnInit(): void { }

  onSuccess(ctor: Ctor) {
    this.uiService.showSuccess(`Added new article ${ctor.title}`);
    setTimeout(() => {
      this.uiService.hideSuccess();
    }, 1000);
  }

}
