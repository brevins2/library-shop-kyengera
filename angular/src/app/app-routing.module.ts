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

import { EditPhonesComponent } from './Page/edit-phones/edit-phones.component';
import { EditComputersComponent } from './Page/edit-computers/edit-computers.component';

import { PhonePayComponent } from './Pay/phone-pay/phone-pay.component';
import { ComputerPayComponent } from './Pay/computer-pay/computer-pay.component';

import { SliderComponent } from './Component/slider/slider.component';
import { NotificationsComponent } from './Page/notifications/notifications.component';
import { HeaderComponent } from './Component/header/header.component';
import { MessagesComponent } from './Page/messages/messages.component';
import { TermsComponent } from './Component/terms/terms.component';

const routes: Routes = [
  { path: '', redirectTo: 'cmj', pathMatch: 'full' },
  { path: 'test', component: TestsComponent },
  { path: 'slider', component: SliderComponent},
  { path: 'cmj', component: FirstPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'head', component: HeaderComponent },
  { path: 'create', component: CreateComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'users', component: MainComponent, children: [
    { path: '', redirectTo: 'phones', pathMatch: 'full' },
    { path: 'phones', component: PhonesComponent },
    { path: 'computers', component: ComputersComponent }
  ]},
  { path: 'admin', component: AdminComponent, children: [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'user', component: UserComponent },
    { path: 'computer', component: ComputingComponent },
    { path: 'phone', component: PhoneComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'messages', component: MessagesComponent }
  ]},
  { path: 'add computer', component: AddComputerComponent },
  { path: 'add phone', component: AddPhoneComponent },
  { path: 'add user', component: AddUserComponent },
  { path: 'edit-user/:id', component: AddUserComponent },
  { path: 'edit-phone/:id', component: EditPhonesComponent },
  { path: 'edit-computer/:id', component: EditComputersComponent },
  { path: 'up', component: FileUploadComponent },
  { path: 'comp-pay/:id', component: ComputerPayComponent },
  { path: 'phon-pay/:id', component: PhonePayComponent },
  { path: 'terms', component: TermsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
