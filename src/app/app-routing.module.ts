import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Security/login/login.component';
import { FirstPageComponent } from './Pages/first-page/first-page.component';
import { PhoneComponent } from './Page/phone/phone.component';
import { AddPhoneComponent } from './Page/add-phone/add-phone.component';
import { AddComputerComponent } from './Page/add-computer/add-computer.component';
import { PhonesComponent } from './Pages/phones/phones.component';
import { ComputersComponent } from './Pages/computers/computers.component';
import { ComputingComponent } from './Page/computing/computing.component';
import { UserComponent } from './Page/user/user.component';
import { MainComponent } from './Pages/main/main.component';
import { AdminComponent } from './Page/admin/admin.component';
import { FileUploadComponent } from './Component/file-upload/file-upload.component';
import { CreateComponent } from './Security/create/create.component';
import { AddUserComponent } from './Page/add-user/add-user.component';
import { TestsComponent } from './test/tests/tests.component';

import { PhonePayComponent } from './Pay/phone-pay/phone-pay.component';
import { ComputerPayComponent } from './Pay/computer-pay/computer-pay.component';

const routes: Routes = [
  { path: '', redirectTo: 'cmj', pathMatch: 'full' },
  { path: 'test', component: TestsComponent },
  { path: 'cmj', component: FirstPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent },
  { path: 'users', component: MainComponent, children: [
    { path: '', redirectTo: 'phones', pathMatch: 'full' },
    { path: 'phones', component: PhonesComponent },
    { path: 'computers', component: ComputersComponent }
  ]},
  { path: 'admin', component: AdminComponent, children: [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'user', component: UserComponent },
    { path: 'computer', component: ComputingComponent },
    { path: 'phone', component: PhoneComponent }
  ]},
  { path: 'add computer', component: AddComputerComponent },
  { path: 'add phone', component: AddPhoneComponent },
  { path: 'add user/:id', component: AddUserComponent },
  { path: 'edit phone/:id', component: AddPhoneComponent },
  { path: 'up', component: FileUploadComponent },
  { path: 'comp-pay/:id', component: ComputerPayComponent },
  { path: 'phon-pay/:id', component: PhonePayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
