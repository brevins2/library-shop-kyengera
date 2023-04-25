import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';

@Component({
  selector: 'app-edit-phones',
  templateUrl: './edit-phones.component.html',
  styleUrls: ['./edit-phones.component.css']
})
export class EditPhonesComponent implements OnInit {

  editPhone = new FormGroup({Title: new FormControl(''), Storage: new FormControl(''), Battery: new FormControl(''),    Price: new FormControl(''), File1: new FormControl(''), File2: new FormControl(''), File3: new FormControl(''), Brand: new FormControl('')});
  selectedFile!: File; 
  constructor(private router: Router, private service: ServeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getPhoneWithID(this.route.snapshot.params['id']).subscribe(res => {
      let x = res.data;
      x.forEach((element: any) => {
        this.editPhone = new FormGroup({ Title: new FormControl(element['Title']), Storage: new FormControl(element['Storage']), Battery: new FormControl(element['Battery']), Price: new FormControl(element['Price']), File1: new FormControl(element['File1']), File2: new FormControl(element['File2']), File3: new FormControl(element['File3']), Brand: new FormControl(element['Brand'])});
      });
    });
  }
  
  cancel(){
    this.router.navigate(['/admin/phone']);
  }
  
  clr(){
    this.editPhone.reset();
  }

  edit(){
    this.service.updatePhone(this.route.snapshot.params['id'] ,this.editPhone.value).subscribe(res => {
      this.editPhone.reset();
      this.cancel();
    });
  }

}
