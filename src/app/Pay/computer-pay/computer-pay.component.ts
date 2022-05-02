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

  buyComputer = new FormGroup({
    id: new FormControl(''),
    Title: new FormControl(''),
    Price: new FormControl(''),
    Category: new FormControl(''),
    textarea: new FormControl(''),
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
        textarea: new FormControl(result['textarea']),
        File: new FormControl(result['File'])
      });
    });
  }

 
  order(){}

  cancel(){
    this.route.navigate(['users/computers']);
  }
}
