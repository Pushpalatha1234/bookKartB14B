import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';  
//import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  SubscriptionService: any;
  subscriptionService: any;

  constructor(private http: HttpClient) {
    const baseURL = "https://bookcart.azurewebsites.net/wishlist";
  }
  /*toggleWishlistItem(userId: number, bookId: number) {
    return this.http.post("https://bookcart.azurewebsites.net/wishlist", {})
      .pipe(map((response: Book[]) => {
        this.setWishlist();
        return response;
      }));
  }*/

  /*getWishlistItems(userId: number) {
    return this.http.get("https://bookcart.azurewebsites.net/wishlist" + {})
      .pipe(map((response: Book[]) => {
        this.setWishlist(response);
        return response;
      }));
  }*/

  setWishlist(response:[]) {
    this.SubscriptionService.wishlistItemcount$.next(response.length);
    this.subscriptionService.wishlistItem$.next(response);
  }

  clearWishlist(userId: number) {
    return this.http.delete<number>("https://bookcart.azurewebsites.net/wishlist", {})
      .pipe(map((response: number) => {
        this.SubscriptionService.wishlistItem$.next([]);
        return response;
      })
      );
  }
}

