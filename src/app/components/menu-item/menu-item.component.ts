import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../../models/menu-item';

@Component({
  selector: 'i-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: MenuItem;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.menuItem.expanded = !this.menuItem.expanded;
  }

}
