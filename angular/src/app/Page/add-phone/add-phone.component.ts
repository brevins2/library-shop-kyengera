import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ServeService } from 'src/app/Services/serve.service';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {

  addPhone = new FormGroup({
    title: new FormControl(''),
    Storage: new FormControl(''),
    Battery: new FormControl(''),
    Price: new FormControl(''),
    File: new FormControl(''),
  });
  selectedFile!: File; 
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private service: ServeService) { }

  ngOnInit(): void {
    this.getCurrentPhoneData();
  }
  
  cancel(){
    this.router.navigate(['/phone']);
  }
  clr(){
    this.addPhone.reset();
  }

  getCurrentPhoneData(){
    this.service.getCurrentPhoneData(this.route.snapshot.params['id']).subscribe((result: any ) => {
      this.addPhone = new FormGroup({
        title: new FormControl(result['title']),
        Storage: new FormControl(result['Storage']),
        Battery: new FormControl(result['Battery']),
        Price: new FormControl(result['Price']),
        File: new FormControl(result['File']),
      })
    });
  }

  onFileUpload(event: any){
    this.selectedFile = <File>event.target.files[0];
    this.addPhone.patchValue({
      fileSource : File
    });
  }

  get f(){
    return this.addPhone.controls;
  }

  onUpload(){
    // const formData = new FormData();
    // formData.append('image', this.addPhone.get('fileSource').value);
   
    // this.http.post('http://localhost:3000/Phones', formData)
    //   .subscribe(res => {
    //     console.log(res);
    //     alert('Uploaded Successfully.');
    //   })
    if(this.selectedFile != null){
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name);
      this.http.post("http://localhost:3000/Phones", fd, {reportProgress: true,
      observe: 'events'}).subscribe(event => {
        if(event.type === HttpEventType.UploadProgress){
          // console.log('Upload Progress: '+ Math.round(event.loaded / event.total * 100));
          console.log('done');
        }
        else if(event.type === HttpEventType.Response){
          console.log(event);
        }
    });
  }
}

  Edit(){
    this.service.updatePhones(this.route.snapshot.params['id'], this.addPhone.value).subscribe((result) => {
      this.addPhone.reset();
      return result;
    });
  }
}