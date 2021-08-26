import { Component, OnInit } from '@angular/core';
import { titleAnimation } from '../../../animations/title.animation';
import { UserRestService } from '../../../services/api/user-rest.service'
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
    this.titles = ['ID', 'login', 'nAmE', 'role', 'age', 'Birthday'];
  }

  editUser(id: string) {
    this.editableUser = this.users.find(u => u.id == id);
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
      .filter(
        u => {
          const searchFields: string = [u.name, u.login, u.birth].join(' ').toLocaleLowerCase();
          return this.searchValue
            ? searchFields.indexOf(this.searchValue) !== -1
            : true
        }
      );
  }
}
