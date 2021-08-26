import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { GridComponent } from './grid/grid.component';
import { GridRowComponent } from './grid/grid-row/grid-row.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';
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
    ImageLoaderComponent,
    InProgressComponent,
    MenuItemComponent,
    ModalComponent,
    SearchInputComponent,
    ToggleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  exports: [
    CollapsibleComponent,
    BreadcrumbsComponent,
    DropDownComponent,
    GridComponent,
    GridRowComponent,
    ImageLoaderComponent,
    InProgressComponent,
    MenuItemComponent,
    ModalComponent,
    SearchInputComponent,
    ToggleComponent,
  ]
})
export class ComponentsModule { }
