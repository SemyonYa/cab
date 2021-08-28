import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FileLoadingService } from '../../services/api/file-loading.service';

@Component({
  selector: 'i-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {
  // form: FormGroup = new FormGroup({

  // });
  fileNames: string;

  constructor(private fileLoadingService: FileLoadingService) { }

  ngOnInit(): void { }

  onChange(e: Event) {
    console.log(e);
    let fileData: ArrayBuffer;
    console.log(e.target['files']);

    const selectedFiles: File[] = Array.from(e.target['files']);
    console.log(selectedFiles)
    this.fileNames = selectedFiles.map(f => f.name).join(', ') //remove

    let formData = new FormData();
    for (let index = 0; index < selectedFiles.length; index++) {
      // formData.append('qwwe', 'qwe');
      formData.append(`file${index}`, selectedFiles[index], `file${index}`);
    }
    console.log("🚀 ~ file: file-input.component.ts ~ line 46 ~ FileInputComponent ~ onChange ~ formData", formData)
    this.fileLoadingService.upload(formData)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      )

    // let fileReader: FileReader = new FileReader();
    // for (let file of selectedFiles) {
    //   fileReader.onloadend = () => {
    //     fileData = fileReader.result as ArrayBuffer;
    //     if (fileData) {
    //       this.fileLoadingService.upload(fileData)
    //         .subscribe(
    //           (res) => {
    //             console.log(res);
    //           },
    //           (err) => {
    //             console.log(err);
    //           }
    //         );
    //     }
    //   };
    //   fileReader.readAsDataURL(file);
    // }
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
