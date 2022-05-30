import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TermsComponent } from 'src/app/Component/terms/terms.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  showFiller = false;
  panelOpenState = false;
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

