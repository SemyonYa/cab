import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { titleAnimation } from 'src/animations/title.animation';
import { Filial } from 'src/models/Filial';
import { FilialRestService } from '../../../services/api/filial.rest.service';

@Component({
  selector: 'i-filials-list',
  templateUrl: './filials-list.component.html',
  styleUrls: ['./filials-list.component.scss'],
  animations: [titleAnimation]
})
export class FilialsListComponent implements OnInit {
  filials: Filial[];
  titles: string[];
  fields: string[];
  constructor(
    private filialRest: FilialRestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.filialRest.getAll();
    this.filialRest.list$
      .subscribe(
        items => {
          this.filials = items;
        }
      );

    this.titles = ['ID', 'Title', 'created at', 'Author'];
    this.fields = ['id', 'title', 'createdAt', 'authorName'];
  }

  editFilial(id: number) {
    this.router.navigateByUrl(`/filials/edit/${id}`)
  }

}
