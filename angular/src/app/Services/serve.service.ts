import { HttpClient,HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComputerAccess, Phones, User, Order, Images, Messages } from '../interfaces';

const baseurlFile = "http://localhost:8080/files";
const url2 = "http://localhost:8080/Phones";
const url3 = "http://localhost:8080/Computers";
const url4 = "http://localhost:8080/Accounts";
const urlOrder = "http://localhost:8080/Orders";
const urlMessage = 'http://localhost:8080/Message';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  constructor(private http: HttpClient) { }

  //for phones
  getAllPhones(): Observable<{data: Phones[]}> {
    return this.http.get<{data: Phones[]}>(url2);
  }

  getPhoneWithID(id: number): Observable<{data: Phones[]}> {
    return this.http.get<{data: Phones[]}>(`${url2}/${id}`);
  }

  createPhone(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/add/Phone', data);
  }

  updatePhone(id: any, data: any): Observable<any> {
    return this.http.put(`${url2}/${id}`, data);
  }

  deletePhone(id: any): Observable<any> {
    return this.http.delete(`${url2}/${id}`);
  }

  deleteAllPhones(): Observable<any> {
    return this.http.delete(url2);
  }

  findByPhoneName(name: string): Observable<{data: Phones[]}> {
    return this.http.get<{data: Phones[]}>(`${url2}?Title=${name}`);
  }

  //for computers
  getAllComputers(): Observable<{data: ComputerAccess[]}> {
    return this.http.get<{data: ComputerAccess[]}>(url3);
  }

  getComputerWithID(id: number): Observable<{data: ComputerAccess[]}> {
    return this.http.get<{data: ComputerAccess[]}>(`${url3}/${id}`);
  }

  createComputer(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/add/Computer', data);
  }

  updateComputer(id: any, data: any): Observable<any> {
    return this.http.put(`${url3}/${id}`, data);
  }

  deleteComputer(id: any): Observable<any> {
    return this.http.delete(`${url3}/${id}`);
  }

  deleteAllComputers(): Observable<any> {
    return this.http.delete(url3);
  }

  findByComputerName(name: string): Observable<{data: ComputerAccess[]}> {
    return this.http.get<{data: ComputerAccess[]}>(`${url3}?Title=${name}`);
  }

  //for Users
  getAllUsers(): Observable<{data: User[]}> {
    return this.http.get<{data: User[]}>('http://localhost:8080/Accounts');
  }

  login(Email: string, Password: string): Observable<{data: User[]}> {
    return this.http.get<{data: User[]}>('http://localhost:8080/Accounts');
  }  

  getUserWithID(id: number): Observable<{data: User[]}> {
    return this.http.get<{data: User[]}>(`${url4}/${id}`);
  }

  createUser(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/add/Account', data);
  }

  updateUser(id: any, data: any): Observable<any> {
    return this.http.put(`${url4}/${id}`, data);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${url4}/${id}`);
  }

  deleteAllUsers(): Observable<any> {
    return this.http.delete('http://localhost:8080/Accounts');
  }

  findByUserName(name: string): Observable<{data: User[]}> {
    return this.http.get<{data: User[]}>(`${url4}?Name=${name}`);
  }


  // for orders
  getAllOrders(): Observable<{data: Order[]}> {
    return this.http.get<{data: Order[]}>(urlOrder);
  }

  getOrderWithID(id: number): Observable<{data: Order[]}> {
    return this.http.get<{data: Order[]}>(`${urlOrder}/${id}`);
  }

  createOrder(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/add/Orders', data);
  }

  updateOrder(id: any, data: any): Observable<any> {
    return this.http.put(`${urlOrder}/${id}`, data);
  }

  deleteOrder(id: any): Observable<any> {
    return this.http.delete(`${urlOrder}/${id}`);
  }

  deleteAllOrders(): Observable<any> {
    return this.http.delete('http://localhost:8080/Producers');
  }

  findByNameOrders(name: any): Observable<{data: Order[]}> {
    return this.http.get<{data: Order[]}>(`${urlOrder}?Customer_Name=${name}`);
  }

  
  // for messages
  getAllMessages(): Observable<{data: Messages[]}> {
    return this.http.get<{data: Messages[]}>('http://localhost:8080/Message');
  }

  getMessageWithID(id: number): Observable<{data: Messages[]}> {
    return this.http.get<{data: Messages[]}>(`${urlMessage}/${id}`);
  }

  createMessage(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/add/Message', data);
  }

  updateMessage(id: any, data: any): Observable<any> {
    return this.http.put(`${urlMessage}/${id}`, data);
  }

  deleteMessage(id: any): Observable<any> {
    return this.http.delete(`${urlMessage}/${id}`);
  }

  deleteAllMessages(): Observable<any> {
    return this.http.delete('http://localhost:8080/Message');
  }

  findByTitleMessage(email: any): Observable<{data: Messages[]}> {
    return this.http.get<{data: Messages[]}>(`${urlMessage}?Email=${email}`);
  }

  
  // for images
  upload(data: {URL: string, Name: string}): Observable<HttpEvent<any>>{
    const req = new HttpRequest('Post', 'http://localhost:8080/add/Image', data , {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<{data: Images[]}>{
    return this.http.get<{data: Images[]}>('http://localhost:8080/files');
  }

  getFileWithID(id: number): Observable<{data: Images[]}> {
    return this.http.get<{data: Images[]}>(`${baseurlFile}/${id}`);
  }

  updateFiles (id: any, data: any): Observable<any> {
    return this.http.put(`${baseurlFile}/${id}`, data);
  }

  deleteFiles (id: any): Observable<any> {
    return this.http.delete(`${baseurlFile}/${id}`);
  }

  findByFileName(name: any): Observable<{data: Images[]}> {
    return this.http.get<{data: Images[]}>(`${'http://localhost:8080/files'}?Name=${name}`);
  }
}