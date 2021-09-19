import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor } from 'src/models/Ctor';
import { CtorRestService } from 'src/services/api/ctor.rest.service';

@Component({
  selector: 'i-services-list-norilsk',
  templateUrl: './services-list-norilsk.component.html',
  styleUrls: ['./services-list-norilsk.component.scss'],
  animations: [titleAnimation]
})
export class ServicesListNorilskComponent implements OnInit {
  tag = 'service'
  private ctors: Ctor[];
  titles: string[];
  fields: string[];
  searchValue: string = '';
  filteredCtors: Ctor[];
  ctorForDelete: Ctor;

  constructor(
    private ctorRest: CtorRestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ctorRest.getByTag(this.tag, 'Норильск')
      .subscribe(
        cs => {
          this.ctors = cs;
          this.filterCtors();
        }
      );
    this.titles = ['ID', 'Title', 'created at', 'Author'];
    this.fields = ['id', 'title', 'createdAt', 'authorName'];
  }

  editCtor(id: number) {
    this.router.navigateByUrl(`/services/edit/${id}`)
  }

  onDelete(id: number) {
    this.ctorForDelete = this.ctors.find(c => c.id == id);
  }

  deleteCtor() {
    this.ctorRest.delete(this.ctorForDelete.id)
      .subscribe(
        res => {
          this.ctorRest.getAll();
          this.ctorForDelete = null;
        },
        this.ctorRest.handleError
      );
  }

  closeModal() {
    this.ctorForDelete = null;
  }

  search(value: string) {
    this.searchValue = value;
    this.filterCtors();
  }

  filterCtors() {
    this.filteredCtors = this.ctors
      ? this.ctors
        .filter(
          u => {
            const searchFields: string = [u.title, u.subtitle].join(' ').toLocaleLowerCase();
            return this.searchValue
              ? searchFields.indexOf(this.searchValue.toLocaleLowerCase()) !== -1
              : true
          }
        )
      : null;
  }
}
