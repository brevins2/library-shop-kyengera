import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editUser = new FormGroup({
    Email: new FormControl(''), Password: new FormControl(''), ConfirmPassword: new FormControl(''), Allow: new FormControl('')
  });
  id = this.route.snapshot.params['id'];

  constructor(private router: Router, private route: ActivatedRoute,private service: ServeService){}

  ngOnInit(): void {
    this.service.getUserWithID(this.id).subscribe(res => {
      let x = res.data;
      x.forEach((element: any) => {
        this.editUser = new FormGroup({
          Email: new FormControl(element['Email']), Password: new FormControl(element['Password']), ConfirmPassword: new FormControl(element['Password']), Allow: new FormControl(element['Allow'])
        });
      });
    });
  }

  edit(){
    if(this.editUser.value.Password == this.editUser.value.ConfirmPassword){
      this.service.updateUser(this.id, this.editUser.value).subscribe(() => {
        this.editUser.reset();
        this.cancel();
      });
    }
    else {
      console.log("wrong");
    }
  }

  cancel(){
    this.router.navigate(['/admin/user']);
  }

}
