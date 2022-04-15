import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TermsComponent } from 'src/app/Component/terms/terms.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() profile: string | undefined;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
  } 

  onTerms(){
    this.dialogRef.open(TermsComponent);
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 100px)']).subscribe((res)=>{
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

  search(){}

}
