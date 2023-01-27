import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { finalize, Observable, of } from 'rxjs';
import { ServeService } from 'src/app/Services/serve.service';
import { Images } from 'src/app/interfaces';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  images: Images[] = [];
  ref?: AngularFireStorageReference;
  task?: AngularFireUploadTask;
  downloadURL?: Observable<string>;
  uploadProgress?: Observable<number>;

  fileInfos?: Observable<any>;
  Name = "";
  alerts = false;
  displayedColumns: string[] = ['Name', 'Edit', 'Delete'];
  dataSource = this.images;
  constructor(private afStorage: AngularFireStorage, private http: HttpClient, private serve: ServeService) {}

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  ngOnInit(): void {
    this.serve.getFiles().subscribe(data => {
      this.images = data.data;
      this.dataSource = this.images;
    });
  }

  closeDangerAlert() {
    this.alerts = false;
  }

  upload(): void {
    if(this.selectedFiles) {
      const file = this.selectedFiles[0]
      const path = file.type.indexOf('image') === -1 ? 'movies' : 'images';
      const fileId = Math.random().toString(36).substring(2);
      this.ref = this.afStorage.ref(`${path}/${fileId}`);
      this.task = this.ref.put(file);
      this.uploadProgress = this.task.percentageChanges() as Observable<number>;
      this.task.snapshotChanges().pipe(
        finalize(() => {
          this.ref?.getDownloadURL().subscribe((url: string) => {
            this.serve.upload({ URL: url, Name: file.name }).subscribe({
              next: (event: any) => {
                if(event instanceof HttpResponse) {
                  this.message = "file uplaod successful";
                  this.serve.getFiles().subscribe(data => {
                    this.images = data.data;
                    this.dataSource = this.images;
                  });
                }
              },
              error: (err: any) => {
                console.log(err);
                this.uploadProgress = of(0)
                if(err.error && err.error.message) {
                  this.message = err.error.message;
                } else {
                  this.message = 'Could not upload the file!';
                }
                this.selectedFiles = undefined
              }
            });
          });
        })
      ).subscribe()
    } 
  }

  search() {
    this.serve.findByFileName(this.Name).subscribe(data => {
      this.images = data.data;
      this.dataSource = this.images;
      console.log(this.dataSource);
    });
  }
}
