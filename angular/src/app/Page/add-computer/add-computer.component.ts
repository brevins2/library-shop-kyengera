import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServeService } from 'src/app/Services/serve.service';
import { ComputerAccess } from 'src/app/interfaces';

export class values{
  constructor(
    public ID: number,
    public Title: string,
    public Category: string,
    public Price: number,
    public File: string
  ){}
}

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {

  compute: ComputerAccess[] = [];
  addComputer = new FormGroup({
    ID: new FormControl(''),
    Title: new FormControl(''),
    Category: new FormControl(''),
    Price: new FormControl(''),
    File: new FormControl('')
  });
  constructor(
    private addBuild: FormBuilder, 
    private http: HttpClient,
    private router: Router,
    private serve: ServeService, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
  }

  clr(){
    this.addComputer.reset();
  }

  save(){
    this.serve.createComputer(this.addComputer.value).subscribe(res => {

    });
  }

  cancel(){
    this.router.navigate(['/admin/computer']);
  }

}
