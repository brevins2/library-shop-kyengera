import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServeService } from 'src/app/Services/serve.service';
import { compAccess } from 'src/app/values';
import { ComputerAccess } from 'src/app/interfaces';

export class values{
  constructor(
    public id: number,
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

  compute: ComputerAccess[] = compAccess;
  addComputer = new FormGroup({
    id: new FormControl(''),
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
    this.getCurrentData();
  }

  getCurrentData(){
    this.serve.getCurrentComputerData(this.route.snapshot.params['id']).subscribe((result: any) => {
      this.addComputer = new FormGroup({
        id: new FormControl(result['id']),
        Title: new FormControl(result['Title']),
        Category: new FormControl(result['Category']),
        Price: new FormControl(result['Price']),
        File: new FormControl(result['File'])
      });
    });
  }

  editComputer(){
    this.serve.updateCompAccess;
  }

  addComputers(){}

  clr(){
    this.addComputer.reset();
  }

  save(){
    this.serve.updateCompAccess;
    this.http.post<any>("http://localhost/3000/Computers", this.addComputer.value)
    .subscribe(res=>{
      alert("added successfully!!");
      this.addComputer.reset();
    },
    error=>{
      alert("something went wrong!!");
    });
  }

  cancel(){
    this.router.navigate(['/admin/computer']);
    // this.http.delete<any>('http://localhost/3000/Computers')
    // .subscribe(res=>{
    //   this.addComputer.value;
    // });
  }

}
