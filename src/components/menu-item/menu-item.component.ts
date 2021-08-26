import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item';

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
