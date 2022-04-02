import { Component, OnInit } from '@angular/core';
// import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-movie-pay',
  templateUrl: './movie-pay.component.html',
  styleUrls: ['./movie-pay.component.css']
})
export class MoviePayComponent implements OnInit {

  constructor(
    // render({
    //   id: "#myPaypalButtons",
    //   currency: "USD",
    //   value: "99",
    //   onApprove: (details) => {
    //     alert("Transaction works well");
    //   }
    // });
  ) { }

  ngOnInit(): void {
  }

}
