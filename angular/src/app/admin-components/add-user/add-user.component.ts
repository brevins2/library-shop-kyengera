import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
    Email: new FormControl(''),
    Password: new FormControl(''),
    ConfirmPassword: new FormControl(''),
    Allow: new FormControl('')
  });

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,
    private service: ServeService) { }

  ngOnInit(): void {}

  signUp(){
    this.service.createUser(this.signUpForm.value).subscribe(res => {
      this.signUpForm.reset();
    });
  }

  cancel(){
    this.router.navigate(['/admin/user']);
  }
}