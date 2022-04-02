import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../../interfaces';
import { movies } from 'src/app/values';
import { ServeService } from 'src/app/Services/serve.service';
import { MatDialog } from '@angular/material/dialog';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { FormControl, FormGroup } from '@angular/forms';

export class Api{
  constructor(
    public id: number,
    public Title: string,
    public Cartegory: string,
    public Amount: number,
    public Rating: string,
    public File: string
  ){}
}

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  id: number=0;
  api: Api[]=[];
  movie: Movies[] = movies;

  editMovies = new FormGroup({
    id: new FormControl(''),
    Title: new FormControl(''),
    Cartegory: new FormControl(''),
    Amount: new FormControl(''),
    Rating: new FormControl(''),
    File: new FormControl('')
  });

  constructor(
    private http: HttpClient,
    private movieServe: ServeService,
    private dialogRef: MatDialog,

    ) {
    console.log(this.movie);
  }

  ngOnInit(): void {
    this.getApi();
  }

  getApi(){
    this.http.get<any>('http://localhost:3000/Movies').subscribe(
      response=>{
        this.api = response;
      });
  }

  popUp(idToPass: any){
    alert(this.id);
    return this.dialogRef.open(AddMovieComponent,{
      data:{
        id: idToPass
      }
    });
  }

  delM(movieDelete: Movies){
    this.movieServe.deleteTask(movieDelete).subscribe(()=> this.movie = this.movie.filter(t => t.id !== movieDelete.id));
    this.http.delete('http://localhost:3000/Movies').
    subscribe(()=>(this.movie = this.movie.filter((t)=>
    t.id!)));
  }

  editM(idToPass: any){
    alert(this.id);
    return this.dialogRef.open(AddMovieComponent,{
      data:{
        id: idToPass
      }
    });
  }

}
