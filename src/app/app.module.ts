import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HeaderComponent } from './Component/header/header.component';
import { SliderComponent } from './Component/slider/slider.component';
import { AddPhoneComponent } from './Page/add-phone/add-phone.component';
import { AddUserComponent } from './Page/add-user/add-user.component';
import { AddComputerComponent } from './Page/add-computer/add-computer.component';
import { AdminComponent } from './Page/admin/admin.component';
import { ComputingComponent } from './Page/computing/computing.component';
import { PhoneComponent } from './Page/phone/phone.component';
import { UserComponent } from './Page/user/user.component';
import { ComputersComponent } from './Pages/computers/computers.component';
import { FirstPageComponent } from './Pages/first-page/first-page.component';
import { MainComponent } from './Pages/main/main.component';
import { PhonesComponent } from './Pages/phones/phones.component';
import { ComputerPayComponent } from './Pay/computer-pay/computer-pay.component';
import { PhonePayComponent } from './Pay/phone-pay/phone-pay.component';
import { LoginComponent } from './Security/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadComponent } from './Component/file-upload/file-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateComponent } from './Security/create/create.component';
import { TermsComponent } from './Component/terms/terms.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { TestsComponent } from './test/tests/tests.component';

import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { NotificationsComponent } from './Page/notifications/notifications.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessagesComponent } from './Page/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    AddPhoneComponent,
    AddUserComponent,
    AddComputerComponent,
    AdminComponent,
    ComputingComponent,
    PhoneComponent,
    UserComponent,
    ComputersComponent,
    FirstPageComponent,
    MainComponent,
    PhonesComponent,
    ComputerPayComponent,
    PhonePayComponent,
    LoginComponent,
    FileUploadComponent,
    CreateComponent,
    TermsComponent,
    TestsComponent,
    NotificationsComponent,
    MessagesComponent
  ],
  exports: [
    MatDialogModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSliderModule,
    MatGridListModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxPayPalModule,
    CarouselModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }