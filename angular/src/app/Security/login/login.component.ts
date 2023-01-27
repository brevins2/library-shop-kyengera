import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "login";
  alert = false;
  alerts = false;
  hide = true;
  @Output() profile: string = '';
  public loginForm! : FormGroup;
  user: User[] = [];
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
    this.http.get<{data: User[]}>("http://localhost:8080/Accounts").subscribe(res=>{
      this.user = res.data;

      const user = this.user.find((a:any)=>{
        return a.Email === this.loginForm.value.email &&
          a.Password === this.loginForm.value.password;
      });
      const admin = this.user.find(()=>{
        return 'admin@ug.com' === this.loginForm.value.email &&
        'i83admin' === this.loginForm.value.password;
      });

      if('admin@ug.com' === this.loginForm.value.email &&
        'i83admin' === this.loginForm.value.password){
        this.alert = true;
        this.loginForm.reset();
        this.router.navigate(['/admin']);
      }
      else if (user) {
        this.alert = true;
        this.profile = user.Email;
        this.loginForm.reset();
        this.router.navigate(['/users']);
      }
      else{
        this.alerts = true;
      }
    },
    error=>{
      this.alerts = true;
    });
  }

  closeAlert(){
    this.alert = false;
  }

  closeDangerAlert(){
    this.alerts = false;
  }
}
