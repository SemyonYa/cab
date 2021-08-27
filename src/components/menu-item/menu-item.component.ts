import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'i-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() menuItem: MenuItem;

  toggle() {
    this.menuItem.expanded = !this.menuItem.expanded;
  }
}

export interface MenuItem {
  id: number,
  title: string,
  route?: string,
  expanded: boolean,
  children?: MenuItem[]
  action?(): void;
}
