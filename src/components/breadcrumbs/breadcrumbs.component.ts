import { Component, Input } from '@angular/core';

@Component({
  selector: 'i-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  @Input() items: { title: string, route: string }[];
}
