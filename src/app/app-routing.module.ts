import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';
import { EnterComponent } from './pages/enter/enter.component';
import { FilialsEditComponent } from './pages/filials-edit/filials-edit.component';
import { FilialsListComponent } from './pages/filials-list/filials-list.component';
import { FilialsComponent } from './pages/filials/filials.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersAddComponent } from './pages/users-add/users-add.component';
import { UsersEditComponent } from './pages/users-edit/users-edit.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UsersLockedComponent } from './pages/users-locked/users-locked.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: '', component: EnterComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent },
  {
    path: 'filials', component: FilialsComponent, children: [
      { path: '', component: FilialsListComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: FilialsEditComponent },
    ]
  },
  {
    path: 'users', component: UsersComponent, children: [
      { path: '', component: UsersListComponent, pathMatch: 'full' },
      { path: 'add', component: UsersAddComponent },
      { path: 'edit/:id', component: UsersEditComponent },
      { path: 'locked', component: UsersLockedComponent }
    ]
  },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
