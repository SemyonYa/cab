import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor } from 'src/models/Ctor';
import { CtorRestService } from 'src/services/api/ctor.rest.service';

@Component({
  selector: 'i-personal-list',
  templateUrl: './personal-list.component.html',
  styleUrls: ['./personal-list.component.scss'],
  animations: [titleAnimation]
})
export class PersonalListComponent implements OnInit {
  private ctors: Ctor[];
  titles: string[];
  exclude: string[];
  searchValue: string = '';
  filteredCtors: Ctor[];
  ctorForDelete: Ctor;

  tag = 'personal'

  constructor(
    private ctorRest: CtorRestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ctorRest.getByTag(this.tag)
      .subscribe(
        cs => {
          this.ctors = cs;
          this.filterCtors();
        }
      );
    this.titles = ['ID', 'Title', 'created at', 'Author'];
    this.exclude = [];
    // this.exclude = ['subtitle', 'authorId', 'thumbId', 'tag'];
  }

  editCtor(id: number) {
    this.router.navigateByUrl(`/personal/edit/${id}`)
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

  closeUser() {
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
