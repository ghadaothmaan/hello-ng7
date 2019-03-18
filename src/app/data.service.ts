import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  showMessage: boolean = false;
  constructor(private http: HttpClient) { }

  clicked() {
    this.showMessage = true;
    console.log(this.showMessage);
    console.log('clicked');
  }
  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }
}
