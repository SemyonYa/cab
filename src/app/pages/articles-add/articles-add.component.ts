import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor } from 'src/models/Ctor';
import { CtorRestService } from 'src/services/api/ctor.rest.service';

@Component({
  selector: 'i-articles-add',
  templateUrl: './articles-add.component.html',
  styleUrls: ['./articles-add.component.scss'],
  animations: [titleAnimation]
})
export class ArticlesAddComponent implements OnInit {
  ctor: Ctor;
  constructor(public ctorRest: CtorRestService) { }

  ngOnInit(): void {
    this.ctor = new Ctor();
  }

  updateCtor(ctor: Ctor) {
    for (let key in ctor) {
      if (key !== 'items') {
        this.ctor[key] = ctor[key];
      }
    }
  }

}
