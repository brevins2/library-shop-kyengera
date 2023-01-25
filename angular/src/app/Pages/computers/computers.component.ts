import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ComputerPayComponent } from 'src/app/Pay/computer-pay/computer-pay.component';
import { ComputerAccess } from 'src/app/interfaces';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})

export class ComputersComponent implements OnInit {

  comp: ComputerAccess[] = [];
  _filterText: string= "";
  searchText: ComputerAccess[] = [];
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
    this.http.get<{data: ComputerAccess[]}>('http://localhost:8080/Computers').subscribe(response=>
      {
        this.comp = response.data;
        if(this.comp.length === 0 || this.filterText === ''){
          return response.data;
        }
        else{
          return this.comp.filter((computer: any) => {
            return computer.Title  === filterTerm;
          })
        }
      });
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