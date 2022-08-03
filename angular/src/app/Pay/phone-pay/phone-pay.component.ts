import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

export class Api{
  constructor(
    public id: number,
    public Title: string,
    public Storage: string,
    public Battery: string,
    public Price: number,
    public File: string,
    public Brand: string
  ){}
}


@Component({
  selector: 'app-phone-pay',
  templateUrl: './phone-pay.component.html',
  styleUrls: ['./phone-pay.component.css']
})

export class PhonePayComponent implements OnInit {

  api: Api[] = [];
  alert = false;
  buyPhone = new FormGroup({
    id: new FormControl(''),
    Message: new FormControl(''),
    Title: new FormControl(''),
    Storage: new FormControl(''),
    Battery: new FormControl(''),
    Price: new FormControl('')
  });
  // for a modal
  closeResult = '';
  constructor(private router: ActivatedRoute,
  private route: Router,
  private service: ServeService,
  private http: HttpClient,
  private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getCurrentData();
    // this.getCurrentDatas();
    // this.getData();
  }

  getData(){
    this.http.get<any>('http://localhost:3000/Phones').subscribe(
      response=>{
        this.api = response
      });
  }

  // getCurrentDatas(){
  //   this.service.getCurrentPhoneData(this.router.snapshot.params['id']).subscribe((results)=>{
  //     console.log(results);
  //     results = this.api;
  //   });
  // }

  getCurrentData(){
    this.service.getCurrentPhoneData(this.router.snapshot.params['id']).subscribe((result: any)=>{
      this.buyPhone = new FormGroup({
        id: new FormControl(result['id']),
        Message: new FormControl(result['Message']),
        Title: new FormControl(result['Title']),
        Storage: new FormControl(result['Storage']),
        Battery: new FormControl(result['Battery']),
        Price: new FormControl(result['Price'])
      });

      this.http.get<any>('http://localhost:3000/Phones').subscribe(
      response=>{
        this.api = response
      });
    });
  }

  save(){
    this.http.post('http://localhost:3000/Orders', this.buyPhone.value).subscribe((result) => {
      this.alert = true;
      return result;
    });
  }

  logout(){
    this.route.navigate(['login']);
  }

  cancel(){
    this.route.navigate(['users/phones']);
  }

  closeAlert(){
    this.alert = false;
  }

   // open a modal for paypal
    open(content: any) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return `with: ${reason}`;
        }
    }
}
