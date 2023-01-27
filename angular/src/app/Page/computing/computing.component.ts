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

  api: ComputerAccess[] = [];
  
  constructor(private http: HttpClient, private serve: ServeService,
    private route: Router, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAPi();
  }

  getAPi(){
    this.serve.getAllComputers();
  }

  open(){
    this.route.navigate(['add computer']);
  }

  search(){}

}