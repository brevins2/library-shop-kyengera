import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  // @Output() file: string = this.signUpForm.value.file;
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
      this.router.navigate(['login']);
    },
    error=>{
      alert('something went wrong!!');
    });
  }

}
