import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterComponent } from './pages/enter/enter.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersAddComponent } from './pages/users-add/users-add.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UsersLockedComponent } from './pages/users-locked/users-locked.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: '', component: EnterComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'users', component: UsersComponent, children: [
      { path: '', component: UsersListComponent, pathMatch: 'full' }, 
      { path: 'add', component: UsersAddComponent },
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
