import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ArticlesAddComponent } from './pages/articles-add/articles-add.component';
import { ArticlesEditComponent } from './pages/articles-edit/articles-edit.component';
import { ArticlesListComponent } from './pages/articles-list/articles-list.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { EnterComponent } from './pages/enter/enter.component';
import { FilialsEditComponent } from './pages/filials-edit/filials-edit.component';
import { FilialsListComponent } from './pages/filials-list/filials-list.component';
import { FilialsComponent } from './pages/filials/filials.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonalAddComponent } from './pages/personal-add/personal-add.component';
import { PersonalEditComponent } from './pages/personal-edit/personal-edit.component';
import { PersonalListComponent } from './pages/personal-list/personal-list.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { PositionsAddComponent } from './pages/positions-add/positions-add.component';
import { PositionsEditComponent } from './pages/positions-edit/positions-edit.component';
import { PositionsListComponent } from './pages/positions-list/positions-list.component';
import { PositionsComponent } from './pages/positions/positions.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersAddComponent } from './pages/users-add/users-add.component';
import { UsersEditComponent } from './pages/users-edit/users-edit.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UsersLockedComponent } from './pages/users-locked/users-locked.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: '', component: EnterComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
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
  {
    path: 'articles', component: ArticlesComponent, children: [
      { path: 'list', component: ArticlesListComponent },
      { path: 'add', component: ArticlesAddComponent },
      { path: 'edit/:id', component: ArticlesEditComponent },
    ]
  },
  {
    path: 'personal', component: PersonalComponent, children: [
      { path: 'list', component: PersonalListComponent },
      { path: 'add', component: PersonalAddComponent },
      { path: 'edit/:id', component: PersonalEditComponent },
    ]
  },
  {
    path: 'positions', component: PositionsComponent, children: [
      { path: 'list', component: PositionsListComponent },
      { path: 'add', component: PositionsAddComponent },
      { path: 'edit/:id', component: PositionsEditComponent },
    ]
  },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
