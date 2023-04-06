import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComputerAccess } from 'src/app/interfaces';
import { ServeService } from 'src/app/Services/serve.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})

export class ComputersComponent implements OnInit {

  comp: ComputerAccess[] = [];
  searchText = "";
  constructor(private http: HttpClient, private service: ServeService) { }

  ngOnInit(): void {
    this.getApi();
  }
   
  // get computer data from server
  getApi(){
    this.service.getAllComputers().subscribe(res => {
      this.comp = res.data;
    });
  }

  search(){
    this.service.findByComputerName(this.searchText).subscribe(res => {
      this.comp = res.data;
    });
    // if(this.comp.length === 0 || this.filterText === ''){
    //   return this.comp;
    // }
    // else{
    //   return this.comp.filter((computer) => {
    //     return computer.Title.toLowerCase()  === filterTerm.toLowerCase();
    //   })
    // }
  }
}