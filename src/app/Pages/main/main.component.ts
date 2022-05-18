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

  showFiller = true;
  constructor(
    private router: Router,
    private dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
  } 

  onTerms(){
    this.dialogRef.open(TermsComponent);
  }

  search(){}
}

