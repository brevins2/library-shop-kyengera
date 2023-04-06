import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces';
import { ServeService } from "../../Services/serve.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alert = false;
  alerts = false;
  public loginForm! : FormGroup;
  user: User[] = [];
  constructor(private formBuild: FormBuilder, private router: Router, private service: ServeService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuild.group({
      Email: [''],
      Password: ['']
    });
  }

  Login(){
    this.service.getAllUsers().subscribe(res => {
      this.user = res.data;

      const use = this.user.find((a:any)=>{
        return a.Email === this.loginForm.value.Email &&
          a.Password === this.loginForm.value.Password;
      });

      if(use){
        this.alert = true;
        this.loginForm.reset();
        this.router.navigate(['/admin']);
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
