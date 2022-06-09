import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { finalize, Subscription } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  fileName = '';
  uploadProgress: number = 0;
  uploadSub: Subscription = new Subscription;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("thumbnail", file);
        const upload$ = this.http.post("http://localhost:3000/images", formData, {
          reportProgress: true,
          observe: 'events'}).pipe(
              finalize(() => this.reset())
          );
        upload$.subscribe();
    }
}

cancelUpload() {
  this.uploadSub.unsubscribe();
  this.reset();
}

reset() {
  this.uploadProgress = 0;
  this.uploadSub;
}

}
