import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ComputerAccess } from 'src/app/interfaces';

@Component({
  selector: 'app-computer-pay',
  templateUrl: './computer-pay.component.html',
  styleUrls: ['./computer-pay.component.css']
})

export class ComputerPayComponent implements OnInit{

  alert = false;
  buyComputer = new FormGroup({CustomerName: new FormControl(''), Title: new FormControl(''), Price: new FormControl(''),
    Category: new FormControl(''), Message: new FormControl(''), File: new FormControl(''), Email: new FormControl(''), Storage: new FormControl(''), Battery: new FormControl('')});

  comp: ComputerAccess[] = [];
  oneaccessories: ComputerAccess[] = [];

  constructor(private router: ActivatedRoute, private route: Router, private service: ServeService) { }

  ngOnInit(): void {
    this.getCurentSelectedData();
  }

  getCurentSelectedData(){
    this.service.getComputerWithID(this.router.snapshot.params['id']).subscribe((result: any)=>{
      let x = result.data;
      x.forEach((element: any) => {
        this.buyComputer = new FormGroup({
          Title: new FormControl(element['Title']),
          Price: new FormControl(element['Price']),
          Category: new FormControl(element['Category']),
          Message: new FormControl(element['Message']),
          File: new FormControl(element['File']),
          CustomerName: new FormControl(element['CustomerName']),
          Email: new FormControl(element['Email'])
        });
      });
      this.oneaccessories = x;
    });
  }

  logout(){
    this.route.navigate(['users/computers']);
  }

  order(){
    this.service.createOrder(this.buyComputer.value).subscribe(result => {
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