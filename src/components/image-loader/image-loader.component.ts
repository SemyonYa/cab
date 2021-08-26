import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'i-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.scss']
})
export class ImageLoaderComponent implements OnInit {
  fileNames: string;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(e: Event) {
    console.log(e);
    const files: File[] = Array.from(e.target['files'] as FileList);
    this.fileNames = files.map(f => f.name).join(', ')
  }

}
