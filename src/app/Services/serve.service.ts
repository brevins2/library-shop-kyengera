import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComputerAccess, Phones, User, Order, Messages } from '../interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  constructor(private http: HttpClient) { }

 //for phones
   private url2 ="http://localhost:3000/Phones";

   getTaskPhones(): Observable<Phones[]>{
     return this.http.get<any>(this.url2);
   }

   getCurrentPhoneData(id: number){
    return this.http.get(`${this.url2}/${id}`);
   }

   deletePhone(phone: Phones): Observable<Phones>{
     const url = `${this.url2}/${phone.id}`;
     return this.http.delete<Phones>(url);
   }

   updatePhones(id: any, phone: { id: any; }){
     const url = `${this.url2}/${id}`;
     return this.http.put(url, phone);
   }

   //for computers
   private url3 ="http://localhost:3000/Computers";

   getTaskComputer(): Observable<ComputerAccess[]>{
     return this.http.get<any>(this.url3);
   }

   getCurrentComputerData(id: number){
    return this.http.get(`${this.url3}/${id}`);
   }

   deleteCompAccess(comp: ComputerAccess): Observable<ComputerAccess>{
     const url = `${this.url3}/${comp.id}`;
     return this.http.delete<ComputerAccess>(url);
   }

   updateCompAccess(id: any, comp: { id: any; }){
     const url = `${this.url3}/${comp.id}`;
     return this.http.put(url, comp);
   }

   //for Users
   private url4 ="http://localhost:3000/register";

   getTaskUser(): Observable<User[]>{
     return this.http.get<any>(this.url4);
   }

   getCurrentUserData(id: number){
    return this.http.get(`${this.url4}/${id}`);
   }

   deleteUser(use: User): Observable<User>{
     const url = `${this.url4}/${use.id}`;
     return this.http.delete<User>(url);
   }

   updateUser(id: any, use: { id: any; }){
     const url = `${this.url4}/${id}`;
     return this.http.put(url, use);
   }

   // for orders
   private urlOrder ="http://localhost:8080/cmj_entertainment/orders";

    getTaskUser(): Observable<User[]>{
       return this.http.get<any>(this.urlOrder);
    }

    getCurrentUserData(id: number){
       return this.http.get(`${this.urlOrder}/${id}`);
    }

    deleteUser(use: User): Observable<User>{
        const url = `${this.urlOrder}/${use.id}`;
        return this.http.delete<User>(url);
    }

    updateUser(id: any, use: { id: any; }){
        const url = `${this.urlOrder}/${id}`;
        return this.http.put(url, use);
    }

   // for messages
}
