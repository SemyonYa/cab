import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class FileLoadingService {

  constructor(private http: HttpClient) { }

  upload(fileName: string, contentType: string, data: string) {
    // TODO real url
    return this.http.post(`${environment.baseUrl}/qwewrtrdfhjfdfsdfzggn`,
      {
        // p_file_name: fileName,
        // p_content_type: contentType,
        // p_src: data
      }
    )
  }
}
