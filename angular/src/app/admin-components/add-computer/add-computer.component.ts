import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})

export class AddComputerComponent implements OnInit {

  addComputer = new FormGroup({
    ID: new FormControl(''),
    Title: new FormControl(''),
    Category: new FormControl(''),
    Price: new FormControl(''),
    File: new FormControl('')
  });

  constructor(private router: Router, private serve: ServeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  clr(){
    this.addComputer.reset();
  }

  save(){
    this.serve.createComputer(this.addComputer.value).subscribe(res => {
      this.addComputer.reset();
    });
  }

  cancel(){
    this.router.navigate(['/admin/computer']);
  }

}