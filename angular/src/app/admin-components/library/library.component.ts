import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Images } from 'src/app/interfaces';
import { ServeService } from 'src/app/Services/serve.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router, private serve: ServeService) { }

  images: Images[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Delete'];
  dataSource = this.images;

  ngOnInit(): void {
    this.getCurrentFile();
  }

  close() {
    this.route.navigate(['/developer/edits/add-library']);
  }

  getCurrentFile() {
    this.serve.getFileWithID(this.router.snapshot.params['id']).subscribe((result: any) => {
      this.images = result.data;
      this.dataSource = this.images;
    });
  }

  delete() {
    this.serve.deleteFiles(this.router.snapshot.params['id']).subscribe((response)=> {
      this.images = response.data;
      this.close();
    });
  }

  back() {
    this.route.navigate(['/developer/edits/add-library']);
  }

}
