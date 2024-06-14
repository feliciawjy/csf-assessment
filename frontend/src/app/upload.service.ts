import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  // TODO: Task 3.
  private readonly http = inject(HttpClient);
  // You may add add parameters to the method
  upload(data: any): Observable<any> {
    return this.http.post("/api/upload", data);
  }

  getImageByImageKey(imageKey : string) : Observable<any> {
    return this.http.get(`/api/bundle/${imageKey}`);
  }
}
