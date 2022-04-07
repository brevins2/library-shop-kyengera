import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Phones{
  constructor(
    public id: number,
    public Price: number,
    public Amount: number,
    public Battery: string,
    public Title: string,
    public Cartegory: string,
    public Category: string,
    public Rating: string,
    public File: string,
    public Storage: string,
    public Brand: string
  ){}
}

export class Computers{
  constructor(
    public id: number,
    public Price: number,
    public Amount: number,
    public Battery: string,
    public Title: string,
    public password: string,
    public email: string,
    public Cartegory: string,
    public Category: string,
    public Rating: string,
    public File: string,
    public Storage: string
  ){}
}

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  phone: Phones[] = [];
  computer: Computers[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getApiPhones();
    this.getApiComputer();
  }

  getApiPhones(){
    this.http.get<any>('http://localhost:3000/Phones').subscribe(response=>{
      this.phone = response;
    });
  }

  getApiComputer(){
    this.http.get<any>('http://localhost:3000/Computers').subscribe(response=>{
      this.computer = response;
    });
  }

}


