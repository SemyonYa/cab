import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'i-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {
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
