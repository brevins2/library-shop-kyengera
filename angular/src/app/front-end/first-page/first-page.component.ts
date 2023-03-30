import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServeService } from 'src/app/Services/serve.service';
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

  constructor(private service: ServeService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getPhones();
    this.getComputer();
    this.sendMessage = this.formBuilder.group({
      Email: [''],
      Name: [''],
      Message: ['']
    });
  }

  getPhones(){
    this.service.getAllPhones().subscribe(response=>{
      this.phones = response.data;
    });
  }

  getComputer(){
    this.service.getAllComputers().subscribe( response=>{
        this.computers = response.data;
      });
  }

  // contact information
  sendMessages(){
    this.service.createMessage(this.sendMessage.value).subscribe(response =>{
      this.sendMessage.reset();
    });
  }
}