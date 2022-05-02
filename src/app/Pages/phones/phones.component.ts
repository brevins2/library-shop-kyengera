import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PhonePayComponent } from 'src/app/Pay/phone-pay/phone-pay.component';
import { ActivatedRoute } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';

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
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  api: Api[] = [];
  constructor(
    private http: HttpClient,
    private dialogRef: MatDialog,
    private router: ActivatedRoute,
    private service: ServeService
  ) { }

  ngOnInit(): void {
    this.getApi();

    // this.getCurrentDatas();
  }

  getCurrentDatas(){
    this.service.getCurrentPhoneData(this.router.snapshot.params['id']).subscribe((results)=>{
      console.log(results);
      return results;
    });
  }

  watch(){
    this.dialogRef.open(PhonePayComponent);
  }

  getApi(){
    this.http.get<any>('http://localhost:3000/Phones').subscribe(
      response=>{
        this.api = response
      });
  }

  search(){}
}
