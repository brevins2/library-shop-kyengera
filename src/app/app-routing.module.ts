import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Security/login/login.component';
import { FirstPageComponent } from './Pages/first-page/first-page.component';
import { AddMovieComponent } from './Page/add-movie/add-movie.component';
import { MovieComponent } from './Page/movie/movie.component';
import { PhoneComponent } from './Page/phone/phone.component';
import { AddPhoneComponent } from './Page/add-phone/add-phone.component';
import { AddComputerComponent } from './Page/add-computer/add-computer.component';
import { PhonesComponent } from './Pages/phones/phones.component';
import { MoviesComponent } from './Pages/movies/movies.component';
import { ComputersComponent } from './Pages/computers/computers.component';
import { ComputingComponent } from './Page/computing/computing.component';
import { UserComponent } from './Page/user/user.component';
import { MainComponent } from './Pages/main/main.component';
import { AdminComponent } from './Page/admin/admin.component';
import { FileUploadComponent } from './Component/file-upload/file-upload.component';
import { CreateComponent } from './Security/create/create.component';
import { AddUserComponent } from './Page/add-user/add-user.component';
import { TestsComponent } from './test/tests/tests.component';
import { MovComponent } from './Pages/First/mov/mov.component';
import { CompComponent } from './Pages/First/comp/comp.component';
import { PhonComponent } from './Pages/First/phon/phon.component';
import { MoviePayComponent } from './Pay/movie-pay/movie-pay.component';
import { PhonePayComponent } from './Pay/phone-pay/phone-pay.component';
import { ComputerPayComponent } from './Pay/computer-pay/computer-pay.component';

const routes: Routes = [
  { path: 'test', component: TestsComponent },
  { path: '', redirectTo: 'cmj', pathMatch: 'full' },
  { path: 'cmj', component: FirstPageComponent, children:[
    { path: 'comp', component: CompComponent },
    { path: 'phon', component: PhonComponent },
    { path: 'mov', component: MovComponent }
  ] },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent },
  { path: 'users', component: MainComponent, children: [
    { path: '', redirectTo: 'movies', pathMatch: 'full' },
    { path: 'phones', component: PhonesComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'computers', component: ComputersComponent }
  ]},
  { path: 'admin', component: AdminComponent, children: [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'user', component: UserComponent },
    { path: 'computer', component: ComputingComponent },
    { path: 'moviespage', component: MovieComponent },
    { path: 'phone', component: PhoneComponent }
  ]},
  { path: 'add movie', component: AddMovieComponent },
  { path: 'add computer', component: AddComputerComponent },
  { path: 'add phone', component: AddPhoneComponent },
  { path: 'add user/:id', component: AddUserComponent },
  { path: 'edit phone/:id', component: AddPhoneComponent },
  { path: 'up', component: FileUploadComponent },

  { path: 'comp-pay/:id', component: ComputerPayComponent },
  { path: 'phon-pay/:id', component: PhonePayComponent },
  { path: 'mov-pay/:id', component: MoviePayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
