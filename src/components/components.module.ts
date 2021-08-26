import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { GridComponent } from './grid/grid.component';
import { GridRowComponent } from './grid/grid-row/grid-row.component';
import { FileInputComponent } from './file-input/file-input.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ModalComponent } from './modal/modal.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ToggleComponent } from './toggle/toggle.component';



@NgModule({
  declarations: [
    CollapsibleComponent,
    BreadcrumbsComponent,
    DropDownComponent,
    GridComponent,
    GridRowComponent,
    FileInputComponent,
    InProgressComponent,
    MenuItemComponent,
    ModalComponent,
    SearchInputComponent,
    ToggleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,

    CollapsibleComponent,
    BreadcrumbsComponent,
    DropDownComponent,
    GridComponent,
    GridRowComponent,
    FileInputComponent,
    InProgressComponent,
    MenuItemComponent,
    ModalComponent,
    SearchInputComponent,
    ToggleComponent,
  ]
})
export class ComponentsModule { }
