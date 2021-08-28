import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class FileLoadingService {

  constructor(private http: HttpClient) { }

  upload(formData: FormData) {
    // TODO real url
    return this.http.post(`${environment.baseUrl}/images`,
      { formData },
      { headers: new HttpHeaders().append('Content-Type', 'multipart/form-data') }
    )
  }
}
