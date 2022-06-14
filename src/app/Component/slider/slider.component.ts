import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
// AngularFireList
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from'@angular/fire/compat/storage';
import { FireClass } from 'src/app/firebase/fire-class';
import { FireServiceService } from 'src/app/Services/fire-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  private basePath = '/uploads';
  selectedFiles: FileList = new FileList;
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
    this.http.post('https://console.firebase.google.com/u/0/project/cmj-entertainment/storage/files', fd).subscribe(res => {
      console.log(res);
    });
  }
  /* file upload */
     /* Variabe to store file data */
     filedata:any;
    /* File onchange event */
    fileEvent(e: any){
        this.filedata = e.target.files[0];
    }
    /* Upload button functionality */
    onSubmitForm(f: NgForm) {

      alert('working good!!!');
       
      var myFormData = new FormData();
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      myFormData.append('image', this.filedata);
      /* Image Post Request */
      this.http.post('http://localhost:3000/images', myFormData, {
      headers: headers
      }).subscribe(data => {
       //Check success message
       console.log(data);
      });  

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
  //         this.saveFileData(fileUpload);
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

// afuConfig = {
//   multiple: false,
//   formatsAllowed: ".jpg,.png",
//   maxSize: "1",
//   uploadAPI:  {
//     url:"https://example-file-upload-api",
//     method:"POST",
//     headers: {
//    "Content-Type" : "text/plain;charset=UTF-8",
//    "Authorization" : `Bearer ${token}`
//     },
//     params: {
//       'page': '1'
//     },
//     responseType: 'blob',
//     withCredentials: false,
//   },
//   theme: "dragNDrop",
//   hideProgressBar: true,
//   hideResetBtn: true,
//   hideSelectBtn: true,
//   hideSelectBtn: true,
//   fileNameIndex: true,
//   autoUpload: false,
//   replaceTexts: {
//     selectFileBtn: 'Select Files',
//     resetBtn: 'Reset',
//     uploadBtn: 'Upload',
//     dragNDropBox: 'Drag N Drop',
//     attachPinBtn: 'Attach Files...',
//     afterUploadMsg_success: 'Successfully Uploaded !',
//     afterUploadMsg_error: 'Upload Failed !',
//     sizeLimit: 'Size Limit'
//   }
// };
}
// https://console.firebase.google.com/u/0/project/cmj-entertainment/storage/cmj-entertainment.appspot.com/files