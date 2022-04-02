import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public signUpForm !: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: [''],
      password: [''],
      confirmPassword: [''],
      file: [''],
      check: ['']
    });
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/register", this.signUpForm.value).subscribe(res=>{  
      this.signUpForm.reset();
      // this.router.navigate(['login']);
    },
    error=>{
      alert('something went wrong!!');
    });
  }

}
