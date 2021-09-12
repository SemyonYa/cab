import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-articles-edit',
  templateUrl: './articles-edit.component.html',
  styleUrls: ['./articles-edit.component.scss'],
  animations: [titleAnimation]
})
export class ArticlesEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
