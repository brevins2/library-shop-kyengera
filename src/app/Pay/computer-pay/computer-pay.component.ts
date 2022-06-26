import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeService } from 'src/app/Services/serve.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

export class Api{
  constructor(
    public id: number,
    public Title: string,
    public Price: number,
    public Category: string,
    public File: string,
    public Brand: string
  ){}
}

@Component({
  selector: 'app-computer-pay',
  templateUrl: './computer-pay.component.html',
  styleUrls: ['./computer-pay.component.css']
})
export class ComputerPayComponent implements OnInit{

  alert = false;
  buyComputer = new FormGroup({
    id: new FormControl(''),
    Title: new FormControl(''),
    Price: new FormControl(''),
    Category: new FormControl(''),
    Message: new FormControl(''),
    File: new FormControl('')
  });
  comp: Api[] = [];
  _filterText: string= "";

  constructor(private router: ActivatedRoute, private route: Router, private service: ServeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.service.getCurrentComputerData(this.router.snapshot.params['id']).subscribe((result: any)=>{
      console.log(result);
      this.buyComputer = new FormGroup({
        id: new FormControl(result['id']),
        Title: new FormControl(result['Title']),
        Price: new FormControl(result['Price']),
        Category: new FormControl(result['Category']),
        Message: new FormControl(result['Message']),
        File: new FormControl(result['File'])
      });
    });
    this.getApi(this._filterText);
  }

  getApi(filterTerm: string){
    this.http.get<any>('http://localhost:3000/Computers').subscribe(response=>
    // port for mysql database to store at 3306
      {
        this.comp = response;
        if(response.length === 0 || this.filterText === ''){
          return response;
        }
        else{
          return response.filter((computer: any) => {
            return computer.Title  === filterTerm;
          })
        }
      });
  }

  logout(){
    this.route.navigate(['login']);
  }
 
  order(){
    this.http.post('http://localhost:3000/Orders', this.buyComputer.value).subscribe(result =>{
      this.alert = true;
      return result;
    });
  }

  closeAlert(){
    this.alert = false;
  }

  cancel(){
    this.route.navigate(['users/computers']);
  }

  // search
  get filterText(){
    return this._filterText;
  }

  set filterText(value: string){
    this._filterText = value;
    this.comp = this.search(value);
  }

  search(filterTerm: string){
    if(this.comp.length === 0 || this.filterText === ''){
      return this.comp;
    }
    else{
      return this.comp.filter((computer) => {
        return computer.Title.toLowerCase()  === filterTerm.toLowerCase();
      })
    }
  }
}
