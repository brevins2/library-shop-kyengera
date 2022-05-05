import { Component, OnInit } from '@angular/core';
import { images } from '../../values';
import { slider } from '../../interfaces';
import { HttpClient } from '@angular/common/http';

export class Api{
  constructor(
    public id: number,
    public Title: string,
    public Storage: string,
    public Battery: string,
    public Price: number,
    public File: string,
    public Category: string,
    public Brand: string
  ){}
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  api: Api[] = [];
  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.getApi();
    this.getApi2();
  }

  getApi(){
    this.http.get<any>('http://localhost:3000/Phones').subscribe(
      response=>{
        this.api = response;
      });
  }

  getApi2(){
    this.http.get<any>('http://localhost:3000/Computers').subscribe( response=>
      {
        this.api = response;
      });
  }


}
