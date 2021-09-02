import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { ApiInterceptor } from '../services/api/api.interceptor';

import { AppComponent } from './app.component';
import { EnterComponent } from './pages/enter/enter.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersAddComponent } from './pages/users-add/users-add.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UsersLockedComponent } from './pages/users-locked/users-locked.component';
import { ErrorComponent } from './components/error/error.component';
import { SuccessComponent } from './components/success/success.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { UsersEditComponent } from './pages/users-edit/users-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterComponent,
    ErrorComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    SuccessComponent,
    UsersComponent,
    UsersAddComponent,
    UsersLockedComponent,
    UsersListComponent,
    ArticlesComponent,
    UsersEditComponent,
  ],
  imports: [
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
