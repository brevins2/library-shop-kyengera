import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  showFiller = false;
   constructor(private router: Router) { }


  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['login']);
  }
}