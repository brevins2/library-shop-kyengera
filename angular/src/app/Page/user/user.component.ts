import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ServeService } from 'src/app/Services/serve.service';
import { User } from 'src/app/interfaces';
import { AddUserComponent } from '../add-user/add-user.component';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

export class Users{
  constructor(
    public id: number,
    public file: string,
    public email: string,
    public password: string,
    public confirmPassword: string,
    public check: boolean
  ){}
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: Users[] =[];
  closeResult = '';
  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    file: new FormControl(''),
    check: new FormControl('')
  });
  
  constructor(
    private http: HttpClient,
    private dialogRef: MatDialog,
    private Serve: ServeService,
    private router: Router,
    private route: ActivatedRoute,
    private service: ServeService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getUser();
  }
  
  popUp(){
    this.router.navigate(['add user']);
  }

  getUser(){
    this.http.get<any>('http://localhost:3000/register').subscribe(
      response=>{
      this.user = response;
      })
  }

  deleteCompAccess(userDelete: User){
    this.Serve.deleteUser(userDelete).subscribe(()=> this.user = this.user.filter(t => t.id !== userDelete.id));
    this.http.delete('http://localhost:3000/register').
    subscribe(()=>(this.user = this.user.filter((t)=>
    t.id!)));
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

  // user modal
  getCurrentData(){
    this.service.getCurrentUserData(this.route.snapshot.params['id']).subscribe((result: any) => {
      this.signUpForm = new FormGroup({
      email: new FormControl(result['email']),
      password: new FormControl(result['password']),
      confirmPassword: new FormControl(result['confirmPassword']),
      file: new FormControl(result['file']),
      check: new FormControl(result['check'])
    });
  });
  }

  signUp(){
    this.service.updateUser(this.route.snapshot.params['id'], this.signUpForm.value).subscribe((result) => {
      this.signUpForm.reset();
      return result;
    });
  }

  cancel(){
    this.router.navigate(['/admin/user']);
  }

  search(){}

}
