import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;
  alerts = false;

  public sendMessage!: FormGroup;
 
  slidesChangeMessage = '';
  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.sendMessage = this.formBuilder.group({
      email: [''],
      name: [''],
      message: ['']
    });
  }
  
  onSlideRangeChange(indexes: number[]|void): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }

  search() {
    let text = "Mr. Blue has a blue house";
    let position = text.search(/Blue/);
  }

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