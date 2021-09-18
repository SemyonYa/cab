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

import { FilialsComponent } from './pages/filials/filials.component';
import { FilialsEditComponent } from './pages/filials-edit/filials-edit.component';
import { FilialsListComponent } from './pages/filials-list/filials-list.component';
import { ArticlesListComponent } from './pages/articles-list/articles-list.component';
import { ArticlesAddComponent } from './pages/articles-add/articles-add.component';
import { ArticlesEditComponent } from './pages/articles-edit/articles-edit.component';
import { AboutComponent } from './pages/about/about.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { PersonalListComponent } from './pages/personal-list/personal-list.component';
import { PersonalAddComponent } from './pages/personal-add/personal-add.component';
import { PersonalEditComponent } from './pages/personal-edit/personal-edit.component';
import { PositionsComponent } from './pages/positions/positions.component';
import { PositionsListComponent } from './pages/positions-list/positions-list.component';
import { PositionsAddComponent } from './pages/positions-add/positions-add.component';
import { PositionsEditComponent } from './pages/positions-edit/positions-edit.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServicesListComponent } from './pages/services-list/services-list.component';
import { ServicesAddComponent } from './pages/services-add/services-add.component';
import { ServicesEditComponent } from './pages/services-edit/services-edit.component';

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
    FilialsComponent,
    FilialsEditComponent,
    FilialsListComponent,
    ArticlesListComponent,
    ArticlesAddComponent,
    ArticlesEditComponent,
    AboutComponent,
    PersonalComponent,
    PersonalListComponent,
    PersonalAddComponent,
    PersonalEditComponent,
    PositionsComponent,
    PositionsListComponent,
    PositionsAddComponent,
    PositionsEditComponent,
    ServicesComponent,
    ServicesListComponent,
    ServicesAddComponent,
    ServicesEditComponent,
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
