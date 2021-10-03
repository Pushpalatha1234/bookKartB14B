import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = 'https://bookcart.azurewebsites.net/api';
  constructor(private http: HttpClient) { }

  registerUser(body: any) {
    return this.http.post<any>('https://bookcart.azurewebsites.net/api /user/', body)

  }
}