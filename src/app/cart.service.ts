import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addtocart: any;
  //addtocart(userId: string | null, bookId: number | undefined) {
  //throw new Error('Method not implemented.');
  // }

  constructor(private http: HttpClient) {
    const baseURL = "https://bookcart.azurewebsites.net/shopping-cart";
  }
  addcart(_userId: number, _bookId: number) {
    return this.http.post('https://bookcart.azurewebsites.net/shopping-cart /user/', {});

  }
  //getCartItems(userId: number){
  //return this.http.get('https://bookcart.azurewebsites.net/shopping-cart'+ userId)
  //}

  removeCartItem(_userId: number, _bookId: number) {
    return this.http.delete('https://bookcart.azurewebsites.net/shopping-cart', {});
  }
  deleteCartItem(_userId: number, _bookId: number) {
    return this.http.put('https://bookcart.azurewebsites.net/shopping-cart', {});
  }
  clearCart(_userId: number) {
    return this.http.delete('https://bookcart.azurewebsites.net/shopping-cart', {});
  }
}
