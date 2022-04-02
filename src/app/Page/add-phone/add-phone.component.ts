import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {

  // public addPhone ! : FormGroup;
  constructor(
    private addBuild: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.addPhone;
    //= this.addBuild.group({
    //   title: [''],
    //   Storage: [''],
    //   Battery: [''],
    //   Price: [''],
    //   File: ['']
    // });
  }

  addPhone = new FormGroup({
    title: new FormControl(''),
    Storage: new FormControl(''),
    Battery: new FormControl(''),
    Price: new FormControl(''),
    File: new FormControl(''),
  });

  addPhones(){}

  clr(){
    this.addPhone.reset();
  }

  save(){
    console.warn(this.addPhone.value);
    this.http.post<any>("http://localhost/3000/Phones", this.addPhone.value)
    .subscribe(res=>{
      alert(res);
      alert("added successfully!!");
      this.addPhone.reset();
      this.router.navigate(['/phone']);
    },
    error=>{
      alert(this.addPhone.value);
      alert("something went wrong!!");
    });
  }

  del(){
    this.http.delete<any>('http://localhost/3000/Phones')
    .subscribe(res=>{
      this.addPhone.value;
    });
  }


}
