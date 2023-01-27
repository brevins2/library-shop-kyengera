import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerAccess } from 'src/app/interfaces';
import { ServeService } from 'src/app/Services/serve.service';

@Component({
  selector: 'app-computing',
  templateUrl: './computing.component.html',
  styleUrls: ['./computing.component.css']
})
export class ComputingComponent implements OnInit {

  computers: ComputerAccess[] = [];
  displayedColumns: string[] = ['ID', 'Title', 'Category', 'Price', 'File', 'Edit', 'Delete'];
    dataSource = this.computers;

  constructor(private http: HttpClient, private serve: ServeService, private route: Router, 
    private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAPi();
  }

  getAPi(){
    this.serve.getAllComputers().subscribe(res => {
      this.computers = res.data;
      this.dataSource = this.computers;
    });
  }

  open(){
    this.route.navigate(['add computer']);
  }

  search(){}

}