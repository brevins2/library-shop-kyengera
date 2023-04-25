import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Security/login/login.component';
import { FirstPageComponent } from './front-end/first-page/first-page.component';
import { PhoneComponent } from './admin-components/phone/phone.component';
import { AddPhoneComponent } from './admin-components/add-phone/add-phone.component';
import { AddComputerComponent } from './admin-components/add-computer/add-computer.component';
import { PhonesComponent } from './front-end/phones/phones.component';
import { ComputersComponent } from './front-end/computers/computers.component';
import { ComputingComponent } from './admin-components/computing/computing.component';
import { UserComponent } from './admin-components/user/user.component';
import { MainComponent } from './front-end/main/main.component';
import { AdminComponent } from './admin-components/admin/admin.component';
import { AddUserComponent } from './admin-components/add-user/add-user.component';

import { EditPhonesComponent } from './admin-components/edit-phones/edit-phones.component';
import { EditComputersComponent } from './admin-components/edit-computers/edit-computers.component';

import { PhonePayComponent } from './Pay/phone-pay/phone-pay.component';
import { ComputerPayComponent } from './Pay/computer-pay/computer-pay.component';

import { NotificationsComponent } from './admin-components/notifications/notifications.component';
import { HeaderComponent } from './Component/header/header.component';
import { MessagesComponent } from './admin-components/messages/messages.component';
import { EditUserComponent } from './admin-components/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'cmj', pathMatch: 'full' },
  { path: 'cmj', component: FirstPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'head', component: HeaderComponent },
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
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'edit-phone/:id', component: EditPhonesComponent },
  { path: 'edit-computer/:id', component: EditComputersComponent },
  { path: 'comp-pay/:id', component: ComputerPayComponent },
  { path: 'phon-pay/:id', component: PhonePayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
