import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'i-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {
  fileNames: string;

  constructor() { }

  ngOnInit(): void { }

  onChange(e: Event) {
    console.log(e);
    let scan: ArrayBuffer;
    const selectedFiles: File[] = Array.from(e.target['files'] as FileList);
    this.fileNames = selectedFiles.map(f => f.name).join(', ') //remove
    let fileReader: FileReader = new FileReader();
    for (let file of selectedFiles) {
      fileReader.onloadend = () => {
        scan = fileReader.result as ArrayBuffer;
      };
      fileReader.readAsDataURL(file);
    }
  }

  // loadFile(e: Event) {
  //   let scan = null;
  //   const file: File = (e.target as any).files[0];
  //   let fileReader: FileReader = new FileReader();
  //   fileReader.onloadend = () => {
  //     scan = fileReader.result;
  //     if (scan) {
  //       this.scanLoading = true;
  //       this.loadingError = '';
  //       this.profileApiService.loadScan(file.name, file.type, (scan as string).split(';base64,')[1])
  //         .subscribe(
  //           (res: any) => {
  //             if (res.error) {
  //               this.loadingError = res.error.text;
  //               this.scanLoading = false;
  //               this.onLoad.emit({ isSuccess: false, payload: this.loadingError });
  //             } else if (res.return) {
  //               this.scanId = res.return as string;
  //               this.scanLoading = false;
  //               this.scanLoaded = true;
  //               this.onLoad.emit({ isSuccess: true, payload: this.scanId });
  //             }
  //           },
  //           (err: HttpErrorResponse) => {
  //             this.scanLoading = false;
  //             this.loadingError = err.message;
  //             this.onLoad.emit({ isSuccess: false, payload: this.loadingError });
  //           }
  //         )
  //     }
  //   }
  //   fileReader.readAsDataURL(file);
  // }

}
