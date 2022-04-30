import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

export class values{
  constructor(
    public id: number,
    public Title: string,
    public Category: string,
    public Price: number,
    public File: string
  ){}
}

@Component({
  selector: 'app-computer-pay',
  templateUrl: './computer-pay.component.html',
  styleUrls: ['./computer-pay.component.css']
})
export class ComputerPayComponent implements OnInit{

  public payPalConfig?: IPayPalConfig;
  data: values[] = [];

  addComputer = new FormGroup({
    id: new FormControl(''),
    Title: new FormControl(''),
    Price: new FormControl(''),
    Category: new FormControl(''),
    File: new FormControl(''),
    Brand: new FormControl('')
  });

  constructor(private router: ActivatedRoute, private route: Router, private service: ServeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.initConfig();
  }

  getData(){
    this.service.getCurrentComputerData(this.router.snapshot.params['id']).subscribe((result)=>{
      console.log(result);
      this.addComputer = new FormGroup({
        id: new FormControl(result),
        Title: new FormControl(result),
        Price: new FormControl(result),
        Category: new FormControl(result),
        File: new FormControl(result),
        Brand: new FormControl(result)
      });
    });
  }

  private initConfig(): void {
    this.payPalConfig = {
    currency: 'EUR',
    clientId: 'sb',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: '9.99',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '9.99'
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'EUR',
                value: '9.99',
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then((details: any) => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      // this.showSuccess = true;
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }

  order(){}

  cancel(){
    this.route.navigate(['users/computers']);
  }
}
