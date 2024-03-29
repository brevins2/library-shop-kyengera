import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComputerAccess } from 'src/app/interfaces';
import { ServeService } from 'src/app/Services/serve.service';

@Component({
  selector: 'app-computing',
  templateUrl: './computing.component.html',
  styleUrls: ['./computing.component.css']
})
export class ComputingComponent implements OnInit {

  computers: ComputerAccess[] = [];
  public searched: string = '';
  
  displayedColumns: string[] = ['Title', 'Category', 'Price', 'Front', 'Back', 'Side', 'Edit', 'Delete'];
    dataSource = this.computers;

  constructor(private serve: ServeService, private route: Router) {
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

  delete(id: any) {
    this.serve.deleteComputer(id).subscribe(() => { this.getAPi() });
  }
}