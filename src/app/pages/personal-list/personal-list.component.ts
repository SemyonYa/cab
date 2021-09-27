import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor, RegionType } from 'src/models/Ctor';
import { CtorRestService } from 'src/services/api/ctor.rest.service';

@Component({
  selector: 'i-personal-list',
  templateUrl: './personal-list.component.html',
  styleUrls: ['./personal-list.component.scss'],
  animations: [titleAnimation]
})
export class PersonalListComponent implements OnInit {
  tag = 'personal'
  regions: RegionType[] = ['Москва', 'Норильск'];
  currentRegion: RegionType;
  ctors: Ctor[];
  titles: string[] = ['ID', 'Title', 'created at', 'Author'];
  fields: string[] = ['id', 'title', 'createdAt', 'authorName'];
  searchValue: string = '';
  filteredCtors: Ctor[];
  ctorForDelete: Ctor;


  constructor(
    private ctorRest: CtorRestService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  fetchData() {
    this.ctors = null;
    this.ctorRest.getByTag(this.tag, this.currentRegion)
      .subscribe(
        items => {
          this.ctors = items;
          this.filterCtors();
        }
      );
  }

  selectRegion(region: RegionType) {
    this.currentRegion = region;
    this.fetchData();
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
