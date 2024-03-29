import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPayPalModule } from 'ngx-paypal';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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

import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HeaderComponent } from './Component/header/header.component';
import { AddPhoneComponent } from './admin-components/add-phone/add-phone.component';
import { AddUserComponent } from './admin-components/add-user/add-user.component';
import { AddComputerComponent } from './admin-components/add-computer/add-computer.component';
import { AdminComponent } from './admin-components/admin/admin.component';
import { ComputingComponent } from './admin-components/computing/computing.component';
import { PhoneComponent } from './admin-components/phone/phone.component';
import { UserComponent } from './admin-components/user/user.component';
import { ComputersComponent } from './front-end/computers/computers.component';
import { FirstPageComponent } from './front-end/first-page/first-page.component';
import { MainComponent } from './front-end/main/main.component';
import { PhonesComponent } from './front-end/phones/phones.component';
import { ComputerPayComponent } from './Pay/computer-pay/computer-pay.component';
import { PhonePayComponent } from './Pay/phone-pay/phone-pay.component';
import { LoginComponent } from './Security/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NotificationsComponent } from './admin-components/notifications/notifications.component';
import { MessagesComponent } from './admin-components/messages/messages.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { EditPhonesComponent } from './admin-components/edit-phones/edit-phones.component';
import { EditComputersComponent } from './admin-components/edit-computers/edit-computers.component';
import { EditUserComponent } from './admin-components/edit-user/edit-user.component';
import { LibraryComponent } from './admin-components/library/library.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { DeleteComponent } from './admin-components/user/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
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
    NotificationsComponent,
    MessagesComponent,
    EditPhonesComponent,
    EditComputersComponent,
    EditUserComponent,
    LibraryComponent,
    DeleteComponent
  ],
  exports: [
    MatDialogModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRippleModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxPayPalModule,
    CarouselModule,
    NgbModule,
    Ng2SearchPipeModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCmuc2M1cwtQD23cfMjTfPjheTEA0g-ljY",
      authDomain: "lutimbefilmz-6878c.firebaseapp.com",
      databaseURL: "https://lutimbefilmz-6878c-default-rtdb.firebaseio.com",
      projectId: "lutimbefilmz-6878c",
      storageBucket: "lutimbefilmz-6878c.appspot.com",
      messagingSenderId: "387520150986",
      appId: "1:387520150986:web:6a67c15c7e16662790a333"

    }),
    AngularFireStorageModule,
    AngularFireAuthModule,
    
    // provideFirebaseApp(() => initializeApp({})),
    // provideFirestore(() => getFirestore()),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule,
    // AngularFireStorageModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }