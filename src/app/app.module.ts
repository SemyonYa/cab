import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from '../components/components.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EnterComponent } from './pages/enter/enter.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersAddComponent } from './pages/users-add/users-add.component';
import { UsersLockedComponent } from './pages/users-locked/users-locked.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    UsersComponent,
    UsersAddComponent,
    UsersLockedComponent,
    UsersListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
