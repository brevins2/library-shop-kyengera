import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ComputerPayComponent } from 'src/app/Pay/computer-pay/computer-pay.component';

export class Api{
  constructor(
    public id: number,
    public Title: string,
    public Price: number,
    public Category: string,
    public File: string,
    public Brand: string
  ){}
}

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})

export class ComputersComponent implements OnInit {

  comp: Api[] = [];
  _filterText: string= "";
  searchText: Api[] = [];
  constructor(
    private http: HttpClient,
    private dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
    this.getApi(this._filterText);
    this.searchText = this.comp;
  }
   
  // get computer data from server
  getApi(filterTerm: string){
    this.http.get<any>('http://localhost:3000/Computers').subscribe(response=>
      {
        this.comp = response;
        if(response.length === 0 || this.filterText === ''){
          return response;
        }
        else{
          return response.filter((computer: any) => {
            return computer.Title  === filterTerm;
          })
        }
      });
  }

  watch(){
    this.dialogRef.open(ComputerPayComponent);
  }

  // search
  get filterText(){
    return this._filterText;
  }

  set filterText(value: string){
    this._filterText = value;
    this.comp = this.search(value);
  }

  search(filterTerm: string){
    if(this.comp.length === 0 || this.filterText === ''){
      return this.comp;
    }
    else{
      return this.comp.filter((computer) => {
        return computer.Title.toLowerCase()  === filterTerm.toLowerCase();
      })
    }
  }
}
