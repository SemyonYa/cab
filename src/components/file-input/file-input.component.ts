import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Image } from 'src/models/Image';
import { FileLoadingService } from '../../services/api/file-loading.service';

@Component({
  selector: 'i-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {
  fileNames: string;
  images: Image[];

  constructor(private fileLoadingService: FileLoadingService) { }

  ngOnInit(): void { }

  onChange(e: Event) {
    const selectedFiles: File[] = Array.from((e.target as HTMLInputElement).files);

    let formData = new FormData();
    for (let index = 0; index < selectedFiles.length; index++) {
      formData.append(`files[]`, selectedFiles[index], `file${selectedFiles[index].name}`);
    }

    this.fileLoadingService.upload(formData)
      .subscribe(
        images => {
          this.images = images;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}