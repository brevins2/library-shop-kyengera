import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { ComputerPayComponent } from 'src/app/Pay/computer-pay/computer-pay.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

export class Api{
  constructor(
    public id: number,
    public Title: string,
    public Storage: string,
    public Battery: string,
    public Price: number,
    public File: string,
    public Brand: string,
    public Category: string
  ){}
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  api: Api[] = [];
  comp: Api[] = [];
  public sendMessage!: FormGroup;
  alerts = false;
  constructor(
    private http: HttpClient,
    private router: ActivatedRoute,
    private service: ServeService,
    private dialogRef: MatDialog,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getApi();
    this.getApiComputer();
    this.sendMessage = this.formBuilder.group({
      email: [''],
      name: [''],
      message: ['']
    });
  }
  getCurrentDatas(){
    this.service.getCurrentPhoneData(this.router.snapshot.params['id']).subscribe((results)=>{
      console.log(results);
      return results;
    });
  }

  getApi(){
    this.http.get<any>('http://localhost:3000/Phones').subscribe(
      response=>{
        this.api = response
      });
  }

  // computers
  watch(){
    this.dialogRef.open(ComputerPayComponent);
  }
  
  getApiComputer(){
    this.http.get<any>('http://localhost:3000/Computers').subscribe( response=>
      {
        this.comp = response;
      });
  }

  // contact information
  sendMessages(){
    this.http.post<any>('http://localhost:3000/Message', this.sendMessage.value).subscribe(res=>{
      // this.sendMessage = res;
      this.sendMessage.reset();
    },
    error=>{
      this.alerts =true;
    });
  }
}
