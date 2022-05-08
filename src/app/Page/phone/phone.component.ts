import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Phones } from 'src/app/interfaces';
import { phones } from 'src/app/values';
import { ServeService } from 'src/app/Services/serve.service';
import { AddPhoneComponent } from '../add-phone/add-phone.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

export class Api{
  constructor(
    public id: number,
    public Title: string,
    public Storage: string,
    public Battery: string,
    public Price: number,
    public File: string
  ){}
}

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  id: number =0;
  phones: Api[] = [];
  phone: Phones[] = phones;
  constructor(
    private http: HttpClient,
    private Serve: ServeService,
    private dialogRef: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getApi();
  }

  edit(idToPass: any){
    this.router.navigate(['/edit phone', idToPass]).then.apply((response: any)=>{
      this.updatePhones = response;
    });

    alert(this.id);
    return this.dialogRef.open(AddPhoneComponent,{
      data:{
        id: idToPass
      }
    });
  }

  getApi(){
    this.http.get<any>('http://localhost:3000/Phones').subscribe(
      response =>{
        this.phones = response;
      });
  }

  popUp(idToPass: any){
    // alert(this.id);
    return this.dialogRef.open(AddPhoneComponent,{
      data:{
        id: idToPass
      }
    });
  }

  deletePhone(phoneDelete: Phones){
    this.Serve.deletePhone(phoneDelete).subscribe(()=> this.phone = this.phone.filter(t => t.id !== phoneDelete.id));
    this.http.delete('http://localhost:3000/Phones').
    subscribe(()=>(this.phone = this.phone.filter((t)=>
    t.id!)));
  }

  updatePhones(phonesUpdate: Phones){
    this.Serve.updatePhones(phonesUpdate).subscribe();
  }
}
