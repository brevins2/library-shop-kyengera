import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { MatDialog } from '@angular/material/dialog';
import { ComputerPayComponent } from 'src/app/Pay/computer-pay/computer-pay.component';
import { ComputerAccess, Phones } from 'src/app/interfaces';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  phones: Phones[] = [];
  computers: ComputerAccess[] = [];
  sendMessage = this.formBuilder.group({
      Email: [''],
      Name: [''],
      Message: ['']
    });
  alerts = false;
  panelOpenState = false;

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute,
    private service: ServeService,
    private dialogRef: MatDialog,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getPhones();
    this.getComputer();
    this.sendMessage = this.formBuilder.group({
      Email: [''],
      Name: [''],
      Message: ['']
    });
  }

  getCurrentDatas(){
    this.service.getCurrentPhoneData(this.router.snapshot.params['id']).subscribe((results)=>{
      console.log(results);
      return results;
    });
  }

  getPhones(){
    this.http.get<{data: Phones[]}>("http://localhost:8080/Phones").subscribe(response=>{
      this.phones = response.data;
    });
  }

  getComputer(){
    this.http.get<{data: ComputerAccess[]}>("http://localhost:8080/Computers").subscribe( response=>{
        this.computers = response.data;
      });
  }

  // contact information
  sendMessages(){
    this.http.post<any>("http://localhost:8080/add/Message", this.sendMessage.value).subscribe(response =>{
      this.sendMessage.reset();
    });
  }
}
