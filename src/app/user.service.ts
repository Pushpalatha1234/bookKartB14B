import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) {
    const baseURL = "https://bookcart.azurewebsites.net/api";
  }

  registerUser(body: any) {
    return this.http.post<any>('https://bookcart.azurewebsites.net/api /user/', body)

  }
}