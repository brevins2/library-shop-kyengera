import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  public addMovie ! : FormGroup;
  constructor(private addBuild: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.addMovie = this.addBuild.group({
      title: [''],
      Cartegory: [''],
      Rating: [''],
      Amount: [''],
      file: []
    });
  }

  addMovies(){}

  clr(){
    this.addMovie.reset();
  }

  save(){
    this.http.post<any>("http://localhost/3000/Movies", this.addMovie.value)
    .subscribe(res=>{
      alert("added successfully!!");
      this.addMovie.reset();
    },
    error=>{
      alert("something went wrong!!");
    });
  }

  del(){
    this.http.delete<any>('http://localhost/3000/Movies')
    .subscribe(res=>{
      this.addMovie.value;
    });
  }

  onFolderSelected(event: any){
    if (event.target.files.length > 0){
      let files = event.target.files;
      for (var i = 0; i < files.length; ++i) {
        if(!(files[i].webkitRelativePath.split('/').length > 2)){
            console.log("there it is!!!!");
        }
    }   
  }
  }

}
