import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServeService } from 'src/app/Services/serve.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sendMessage = this.formBuilder.group({
    Email: [''],
    Name: [''],
    Message: ['']
  });

  constructor(private service: ServeService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  sendMessages(){
    this.service.createMessage(this.sendMessage.value).subscribe(response =>{
      this.sendMessage.reset();
    });
  }
}