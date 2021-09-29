import { Component, OnInit } from '@angular/core';
//import { Book} from 'src/book';
import { SubscriptionService } from 'src/subscription.service';
import { observable, Observable, Subject } from 'rxjs';
import { WishlistService } from 'src/wishlist.service';
import { SnackbarService } from 'src/snackbar.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  private _userId!: number;
  Wishlist(_userId: string | null, _bookId: number | undefined) {
    throw new Error('Method not implemented.');
  }

  wishlistItems$!: Observable<any[]>;
  isLoading!: boolean;
  userId;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private subscriptionService: SubscriptionService,
    private wishlistService: WishlistService,
    private snackBarService: SnackbarService) {
    this.userId = localStorage.getItem('userId');
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.getWishlistItems();
  }

  getWishlistItems() {
    this.wishlistItems$ = this.subscriptionService.wishlistItem$;
    this.isLoading = false;
  }

  clearWishlist() {
    this.wishlistService.clearWishlist(this._userId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (result: any) => {
          this.subscriptionService.wishlistItemcount$.next(result);
          this.snackBarService.showSnackBar('Wishlist cleared!!!');
        }, (error: any) => {
          console.log('deleting items of wishlist : ', error);
        });
  }
  emptywishlist(){

  }
}


