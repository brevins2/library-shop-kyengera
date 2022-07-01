import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerAccess } from 'src/app/interfaces';
import { ServeService } from 'src/app/Services/serve.service';
import { compAccess } from 'src/app/values';
import { AddComputerComponent } from '../add-computer/add-computer.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

export class Api{
  constructor(
    public id: number,
    public Title: string,
    public Category: string,
    public Price: number,
    public File: string
  ){}
}

@Component({
  selector: 'app-computing',
  templateUrl: './computing.component.html',
  styleUrls: ['./computing.component.css']
})
export class ComputingComponent implements OnInit {

  id: number = 0;
  api: Api[] = [];
  compute: ComputerAccess[] = compAccess;
  closeResult = '';
  addComputer = new FormGroup({
    id: new FormControl(''),
    Title: new FormControl(''),
    Category: new FormControl(''),
    Price: new FormControl(''),
    File: new FormControl('')
  });
  constructor(private http: HttpClient,
    private Serve: ServeService,
    private dialogRef: MatDialog,
    private router: Router,
    private modalService: NgbModal,
    private serve: ServeService,
    private route: ActivatedRoute) {
    console.log(this.compute);
  }

  ngOnInit(): void {
    this.getAPi();
  }

  // addComputers(){
  //   this.dialogRef.open(AddComputerComponent);
  // }

  getAPi(){
    this.http.get<any>('http://localhost:3000/Computers').subscribe(
      response=>{
        this.api = response;
      });
  }

  deleteCompAccess(computeDelete: ComputerAccess){
    this.Serve.deleteCompAccess(computeDelete).subscribe(()=> this.compute = this.compute.filter(t => t.id !== computeDelete.id));
    this.http.delete('http://localhost:3000/Computers').
    subscribe(()=>(this.compute = this.compute.filter((t)=>
    t.id!)));
  }

  updateCompAccess(){
    this.router.navigate(['/add computer']);
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // adding phone modal
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

  search(){}

}
