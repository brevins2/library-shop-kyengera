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

  public signUpForm !: FormGroup;
  alert = false;
  alerts = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

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
      this.alert = true;
      this.signUpForm.reset();
      this.router.navigate(['login']);
    },
    error=>{
      this.alerts =true;
    });
  }

  closeAlert(){
    this.alert = false;
  }

  closeDangerAlert(){
    this.alerts = false;
  }

  // for notifications next upgrade
  // subscribeToNotifications() {
  //   this.swPush.requestSubscription({
  //       serverPublicKey: this.VAPID_PUBLIC_KEY
  //   })
  //   .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
  //   .catch(err => console.error("Could not subscribe to notifications", err));
  // }
}
