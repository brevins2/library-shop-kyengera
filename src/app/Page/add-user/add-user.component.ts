import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    file: new FormControl(''),
    check: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private service: ServeService
  ) { }

  ngOnInit(): void {
    this.service.getCurrentUserData(this.route.snapshot.params['id']).subscribe((result: any) => {
      this.signUpForm = new FormGroup({
      email: new FormControl(result['email']),
      password: new FormControl(result['password']),
      confirmPassword: new FormControl(result['confirmPassword']),
      file: new FormControl(result['file']),
      check: new FormControl(result['check'])
    });
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
