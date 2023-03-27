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
    Title: new FormControl(''),
    Storage: new FormControl(''),
    Battery: new FormControl(''),
    Price: new FormControl(''),
    File: new FormControl(''),
    Brand: new FormControl(''),
  });
  selectedFile!: File; 
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private service: ServeService) { }

  ngOnInit(): void {
    
  }
  
  cancel(){
    this.router.navigate(['/phone']);
  }
  clr(){
    this.addPhone.reset();
  }

  Save(){
    this.service.createPhone(this.addPhone.value).subscribe(res => {
      this.addPhone.reset();
    });
  }
}