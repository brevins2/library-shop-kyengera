import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "login";
  @Output() profile: string = '';
  public loginForm! : FormGroup;
  constructor(
    private formBuild: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuild.group({
      email: [''],
      password: ['']
    });
  }

  Login(){
    this.http.get<any>("http://localhost:3000/register")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email &&
          a.password === this.loginForm.value.password
      });
      const admin = res.find(()=>{
        return 'admin@ug.com' === this.loginForm.value.email &&
        'i83admin' === this.loginForm.value.password
      });
      if(admin){
        this.loginForm.reset();
        this.router.navigate(['admin']);
      }
      else if (user) {
        this.profile = user.email;
        this.loginForm.reset();
        this.router.navigate(['users']);
      }
      else{
        alert('something went wrong!');
      }
    },
    error=>{
      alert("something went wrong!")
    });
  }


}
