import { Component, OnInit } from '@angular/core';
import { titleAnimation } from '../../../animations/title.animation';
import { UserRestService } from '../../../services/api/user.rest.service'
import { User } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'i-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  animations: [titleAnimation]
})
export class UsersListComponent implements OnInit {
  private users: User[];
  titles: string[];
  fields: string[];
  searchValue: string = '';
  filteredUsers: User[];
  editableUser: User;

  constructor(
    private userRest: UserRestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userRest.getAll();
    this.userRest.list$
      .subscribe(
        us => {
          this.users = us;
          this.filterUsers();
        }
      );
    this.titles = ['ID', 'first name', 'last name', 'login', 'role', 'Birthday', 'activity'];
    this.fields = ['id', 'firstName', 'lastName', 'login', 'role', 'birth', 'activated',];
  }

  editUser(id: number) {
    this.router.navigateByUrl(`/users/edit/${id}`)
  }

  onDelete(id: number) {
    this.editableUser = this.users.find(u => u.id == id);
  }

  deleteUser() {
    this.userRest.delete(this.editableUser.id)
      .subscribe(
        res => {
          this.userRest.getAll();
          this.editableUser = null;
        },
        this.userRest.handleError
      );
  }

  closeUser() {
    this.editableUser = null;
  }

  search(value: string) {
    this.searchValue = value;
    this.filterUsers();
  }

  filterUsers() {
    this.filteredUsers = this.users
      ? this.users
        .filter(
          u => {
            const searchFields: string = [u.lastName, u.firstName, u.login, u.birth].join(' ').toLocaleLowerCase();
            return this.searchValue
              ? searchFields.indexOf(this.searchValue.toLocaleLowerCase()) !== -1
              : true
          }
        )
      : null;
  }
}
