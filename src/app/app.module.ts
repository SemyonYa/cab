import { NgModule } from '@angular/core';

import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EnterComponent } from './pages/enter/enter.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersAddComponent } from './pages/users-add/users-add.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UsersLockedComponent } from './pages/users-locked/users-locked.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component';

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
    ErrorComponent,
  ],
  imports: [
    // BrowserModule,
    // BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
