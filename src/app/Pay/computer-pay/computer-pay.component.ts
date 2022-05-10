import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-computer-pay',
  templateUrl: './computer-pay.component.html',
  styleUrls: ['./computer-pay.component.css']
})
export class ComputerPayComponent implements OnInit{

  alert = false;
  buyComputer = new FormGroup({
    id: new FormControl(''),
    Title: new FormControl(''),
    Price: new FormControl(''),
    Category: new FormControl(''),
    Message: new FormControl(''),
    File: new FormControl('')
  });

  constructor(private router: ActivatedRoute, private route: Router, private service: ServeService, private http: HttpClient) { }

  ngOnInit(): void {
     this.service.getCurrentComputerData(this.router.snapshot.params['id']).subscribe((result: any)=>{
      this.buyComputer = new FormGroup({
        id: new FormControl(result['id']),
        Title: new FormControl(result['Title']),
        Price: new FormControl(result['Price']),
        Category: new FormControl(result['Category']),
        Message: new FormControl(result['Message']),
        File: new FormControl(result['File'])
      });
    });
  }

 
  order(){
    this.http.post('http://localhost:3000/Orders', this.buyComputer.value).subscribe(result =>{
      this.alert = true;
      return result;
    });
  }

  closeAlert(){
    this.alert = false;
  }

  cancel(){
    this.route.navigate(['users/computers']);
  }
}
