import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { HttpClient } from '@angular/common/http';

export class Phones{
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

export class Computers{
  constructor(
    public id: number,
    public Title: string,
    public Price: number,
    public Category: string,
    public File: string,
    public Brand: string
  ){}
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  phones: Phones[] = [];
  computers: Computers[] = [];
  public payPalConfig ? : IPayPalConfig;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
//       this.initConfig();
    this.http.get<any>("http://localhost/3000/Phones").subscribe((result) => {
        this.phones = result;
        this.computers = result;
        console.log("All phones retrieved.....");
    });
   }

  /* private initConfig(): void {
          this.payPalConfig = {
              currency: 'EUR',
              clientId: 'sb',
              createOrderOnClient: (data) => < ICreateOrderRequest > {
                  intent: 'CAPTURE',
                  purchase_units: [{
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
                      items: [{
                          name: 'Enterprise Subscription',
                          quantity: '1',
                          category: 'DIGITAL_GOODS',
                          unit_amount: {
                              currency_code: 'EUR',
                              value: '9.99',
                          },
                      }]
                  }]
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
                  actions.order.get().then((details) => {
                      console.log('onApprove - you can get full order details inside onApprove: ', details);
                  });

              },
              onClientAuthorization: (data) => {
                  console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
                  this.showSuccess = true;
              },
              onCancel: (data, actions) => {
                  console.log('OnCancel', data, actions);
                  this.showCancel = true;

              },
              onError: err => {
                  console.log('OnError', err);
                  this.showError = true;
              },
              onClick: (data, actions) => {
                  console.log('onClick', data, actions);
                  this.resetStatus();
              }
          };
      }
  } */
}
