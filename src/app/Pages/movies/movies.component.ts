import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoviePayComponent } from 'src/app/Pay/movie-pay/movie-pay.component';
import { Movies } from '../../interfaces';
import{ movies } from '../../values';

export class Api{
  constructor(
    public id: number,
    public Price: number,
    public Amount: number,
    public Battery: string,
    public Title: string,
    public password: string,
    public email: string,
    public Cartegory: string,
    public Category: string,
    public Rating: string,
    public File: string,
    public Storage: string
  ){}
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  Apis: Api[]=[];
  movie: Movies[] = movies;
  constructor(
    private http: HttpClient,
    private dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
    this.getApiMovies();
  }

  watch(){
    this.dialogRef.open(MoviePayComponent);
  }

  getApiMovies(){
    this.http.get<any>('http://localhost:3000/Movies').subscribe(response=>{
      this.Apis = response;
    });
  }
}
