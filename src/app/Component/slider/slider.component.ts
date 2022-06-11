import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from'@angular/fire/storage';
import { FireClass } from '../models/file-upload.model';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  private basePath = '/uploads';
  selectedFile: File | any = null;
  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {}

  onFileSelected(event: any){
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(){
    const fd= new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:3000/images', fd).subscribe(res => {
      console.log(res);
    });
  }

  // firebase store for images
  pushFileToStorage(fileUpload: FireClass): Observable<number>{
    const filePath = '${this.basePath}/${fileUpload.file.name}';
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe((downloadURL: string) =>{
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          // this.saveFileData(fileUpload);
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();
  }
}
// https://console.firebase.google.com/u/0/project/cmj-entertainment/storage/cmj-entertainment.appspot.com/files