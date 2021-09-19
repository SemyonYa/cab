import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor } from 'src/models/Ctor';
import { CtorRestService } from 'src/services/api/ctor.rest.service';

@Component({
  selector: 'i-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
  animations: [titleAnimation]
})
export class ServicesListComponent { }
