import { Component, OnInit } from '@angular/core';
import { titleAnimation } from '../../../animations/title.animation';
import { UserRestService } from '../../../services/api/user.rest.service'
import { User } from '../../../models/user';

@Component({
  selector: 'i-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  animations: [titleAnimation]
})
export class UsersListComponent implements OnInit {
  private users: User[];
  titles: string[];

  searchValue: string = '';
  filteredUsers: User[];
  editableUser: User;

  constructor(private userRest: UserRestService) { }

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
  }

  editUser(id: string) {
    this.editableUser = this.users.find(u => u.id == id);
  }

  onDelete(id: number) {
    console.log(id);
    
    this.editableUser = this.users.find(u => u.id == id.toString());
    console.log(this.editableUser);
  }

  deleteUser(id: string) {
    this.userRest.delete(id)
      .subscribe(
        res => {
          console.log(res);
          this.userRest.getAll();
        }
      );
  }

  closeUser() {
    this.editableUser = null;
  }

  search(value: string) {
    this.searchValue = value;
    console.log(this.searchValue);

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
