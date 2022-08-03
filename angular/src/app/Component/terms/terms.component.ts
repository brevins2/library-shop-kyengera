import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

   public loginForm! : FormGroup;
  constructor(
    private formBuild: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuild.group({
      email: [''],
      password: [''],
      confirmpassword: [''],
      file: [''],
      check: ['']
    });
  }

  Login(){
    this.http.post<any>("http://localhost/library-shop-kyengera/src/app/Component/terms/form.php", this.loginForm.value).subscribe(res => {
      alert("successfully registered");
      this.loginForm.reset();
    },
    error => {
      alert("registration unsuccessful");
      this.loginForm.reset();
    });
  }

}
