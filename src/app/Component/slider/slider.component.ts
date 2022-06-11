import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
// AngularFireList
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from'@angular/fire/compat/storage';
import { FireClass } from 'src/app/firebase/fire-class';
import { FireServiceService } from 'src/app/Services/fire-service.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  private basePath = '/uploads';
  // selectedFiles: FileList;
  currentFileUpload: FireClass | undefined;
  percentage: number | undefined;
  selectFiles!: File;
  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private uploadService: FireServiceService
  ) { }

  ngOnInit(): void {}

  onFileSelected(event: any){
    this.selectFiles = <File>event.target.files[0];
  }

  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectFiles, this.selectFiles.name);
    this.http.post('http://localhost:3000/images', fd).subscribe(res => {
      console.log(res);
    });
  }

  // firebase store for images
  // pushFileToStorage(fileUpload: FireClass): Observable<number>{
  //   const filePath = '${this.basePath}/${fileUpload.file.name}';
  //   const storageRef = this.storage.ref(filePath);
  //   const uploadTask = this.storage.upload(filePath, fileUpload.file);

  //   uploadTask.snapshotChanges().pipe(
  //     finalize(() => {
  //       storageRef.getDownloadURL().subscribe((downloadURL: string) =>{
  //         fileUpload.url = downloadURL;
  //         fileUpload.name = fileUpload.file.name;
  //         // this.saveFileData(fileUpload);
  //       });
  //     })
  //   ).subscribe();
  //   return uploadTask.percentageChanges();
  // }
  
  // selectFile(event: { target: { files: FileList | undefined; }; }): void {
  //   this.selectedFiles = event.target.files;
  // }
  // upload(): void {
  //   const file = this.selectedFiles.item(0);
  //   this.selectedFiles = undefined;
  //   this.currentFileUpload = new FireClass(file);
  //   this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
  //     percentage => {
  //       this.percentage = Math.round(percentage);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
}
// https://console.firebase.google.com/u/0/project/cmj-entertainment/storage/cmj-entertainment.appspot.com/files