import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

   @ViewChild(MatSidenav) sidenav!: MatSidenav;
   constructor(
     private observer: BreakpointObserver,
     private router: Router
   ) { }


  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 500px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode = 'side';
        this.sidenav.close();
      }
      else{
        this.sidenav.mode = 'over';
        this.sidenav.open();
      }
    });
  }

}
