import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  selectedFile: File | any = null;
  constructor(
    private http: HttpClient
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
}
// https://console.firebase.google.com/u/0/project/cmj-entertainment/storage/cmj-entertainment.appspot.com/files