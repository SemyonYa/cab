import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-articles-add',
  templateUrl: './articles-add.component.html',
  styleUrls: ['./articles-add.component.scss'],
  animations: [titleAnimation]
})
export class ArticlesAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
