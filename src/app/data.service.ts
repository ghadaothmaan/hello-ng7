import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { visitAll } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  visible: boolean = false;
  constructor(private http: HttpClient) { }

  showOnClick() {
    this.visible = true;
    console.log('clicked');
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }
}
