import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Phones } from 'src/app/interfaces';
import { phones } from 'src/app/values';
import { ServeService } from 'src/app/Services/serve.service';
import { AddPhoneComponent } from '../add-phone/add-phone.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  data = '';
  id: number =0;
  phones: Phones[] = [];
  phone: Phones[] = phones;
  closeResult = '';
  addPhone = new FormGroup({
    title: new FormControl(''),
    Storage: new FormControl(''),
    Battery: new FormControl(''),
    Price: new FormControl(''),
    File: new FormControl(''),
  });
  selectedFile!: File; 
  constructor(private http: HttpClient, private Serve: ServeService, private dialogRef: MatDialog,
    private router: Router, private route: ActivatedRoute, private modalService: NgbModal, private service: ServeService
  ) { }

  ngOnInit(): void {
    this.getApi();
    this.getCurrentPhoneData();
  }

  edit(idToPass: any){
    this.router.navigate(['/edit phone', idToPass]).then.apply((response: any)=>{
      // this.updatePhones = response;
    });

    alert(this.id);
    return this.dialogRef.open(AddPhoneComponent,{
      data:{
        id: idToPass
      }
    });
  }

  // getting data
  getApi(){
    this.http.get<{data: Phones[]}>('http://localhost:8080/Phones').subscribe(response =>{
      this.phones = response.data;
    });
  }

  // popup modal failure
  popUp(idToPass: any){
    return this.dialogRef.open(AddPhoneComponent,{
      data:{
        id: idToPass
      }
    });
  }

  // deleting phones
  deletePhone(phoneDelete: Phones){
    this.Serve.deletePhone(phoneDelete).subscribe(()=> this.phone = this.phone.filter(t => t.id !== phoneDelete.id));
    this.http.delete('http://localhost:8080/Phones').
    subscribe(()=>(this.phone = this.phone.filter((t)=>
    t.id!)));
  }

  // updatePhones(phonesUpdate: Phones){
  //   this.Serve.updatePhones(phonesUpdate).subscribe();
  // }

  open(content: any, data: any) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  // phone modal
  cancel(){
    this.router.navigate(['/phone']);
  }
  clr(){
    this.addPhone.reset();
  }

  getCurrentPhoneData(){
    this.service.getCurrentPhoneData(this.route.snapshot.params['id']).subscribe((result: any ) => {
      this.addPhone = new FormGroup({
        title: new FormControl(result['title']),
        Storage: new FormControl(result['Storage']),
        Battery: new FormControl(result['Battery']),
        Price: new FormControl(result['Price']),
        File: new FormControl(result['File']),
      })
    });
  }

  onFileUpload(event: any){
    this.selectedFile = <File>event.target.files[0];
    this.addPhone.patchValue({
      fileSource : File
    });
  }

  get f(){
    return this.addPhone.controls;
  }

  // uploading image
  onUpload(){
    // const formData = new FormData();
    // formData.append('image', this.addPhone.get('fileSource').value);
   
    // this.http.post('http://localhost:3000/Phones', formData)
    //   .subscribe(res => {
    //     console.log(res);
    //     alert('Uploaded Successfully.');
    //   })
    if(this.selectedFile != null){
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name);
      this.http.post("http://localhost:3000/Phones", fd, {reportProgress: true,
      observe: 'events'}).subscribe(event => {
        if(event.type === HttpEventType.UploadProgress){
          // console.log('Upload Progress: '+ Math.round(event.loaded / event.total * 100));
          console.log('done');
        }
        else if(event.type === HttpEventType.Response){
          console.log(event);
        }
    });
  }
}

// editing phone on another page
  Edit(){
    this.service.updatePhones(this.route.snapshot.params['id'], this.addPhone.value).subscribe((result) => {
      this.addPhone.reset();
      return result;
    });
  }

  search(){}
}
