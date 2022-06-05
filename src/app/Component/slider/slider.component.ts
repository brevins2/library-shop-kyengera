import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { ComputerPayComponent } from 'src/app/Pay/computer-pay/computer-pay.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  selectedFile: File | any = null;

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute,
    private service: ServeService,
    private dialogRef: MatDialog,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    
  }

  onFileSelected(event: any){
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(){
    const fd= new FormData();
    fd.append('image', this.selectedFile, this.selectedFile);
    this.http.post('https://console.firebase.google.com/u/0/project/cmj-entertainment/storage/cmj-entertainment.appspot.com/files', fd).subscribe(res => {
      console.log(res);
    });
  }
}
