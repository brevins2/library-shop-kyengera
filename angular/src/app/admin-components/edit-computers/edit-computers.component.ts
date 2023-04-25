import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { ComputerAccess } from "../../interfaces";

@Component({
  selector: 'app-edit-computers',
  templateUrl: './edit-computers.component.html',
  styleUrls: ['./edit-computers.component.css']
})
export class EditComputersComponent implements OnInit {

  editComputer = new FormGroup({Title: new FormControl(''), Category: new FormControl(''), Price: new FormControl(''), File1: new FormControl(''), File2: new FormControl(''), File3: new FormControl('')});
  computer: ComputerAccess[] = [];

  constructor(private router: Router, private serve: ServeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.serve.getComputerWithID(this.route.snapshot.params['id']).subscribe(res => {
      let x = res.data;
      x.forEach((element: any) => {
        this.editComputer = new FormGroup({Title: new FormControl(element['Title']), Category: new FormControl(element['Category']), Price: new FormControl(element['Price']), File1: new FormControl(element['File1']), File2: new FormControl(element['File2']), File3: new FormControl(element['File3'])});
      });
      
    });
  }

  clr() {
    this.editComputer.reset();
  }

  edit(){
    this.serve.updateComputer(this.route.snapshot.params['id'] ,this.editComputer.value).subscribe(res => {
      this.editComputer.reset();
      this.cancel();
    });
  }

  cancel(){
    this.router.navigate(['/admin/computer']);
  }

}
