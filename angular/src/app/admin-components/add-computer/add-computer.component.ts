import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})

export class AddComputerComponent implements OnInit {

  addComputer = new FormGroup({Title: new FormControl(''), Category: new FormControl(''), Price: new FormControl(''), File1: new FormControl(''), File2: new FormControl(''), File3: new FormControl('')});

  constructor(private router: Router, private serve: ServeService) { }

  ngOnInit(): void {}

  clr() {
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