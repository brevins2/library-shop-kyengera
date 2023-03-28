import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private router: Router, private service: ServeService) { }

  ngOnInit(): void {
    
  }
  
  cancel(){
    this.router.navigate(['/admin/phone']);
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