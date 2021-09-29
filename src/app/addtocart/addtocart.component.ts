import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { SnackbarService } from 'src/snackbar.service';
import { SubscriptionService } from 'src/subscription.service';
@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss']
})
export class AddtocartComponent implements OnInit {
  [x: string]: any;
  @Input()
  bookId: number | undefined;
  userId;

  qty: any;
  constructor(
    private cartservice: CartService,
    private subscriptionservice:SubscriptionService,
    private snackbarService: SnackbarService){
    this.userId = localStorage.getItem('userId');
    this.qty = 1;
  }
  addtocart(){
    this.cartservice.addtocart(this.userId,this.bookId).subscribe(
      (result: any) => {
        this.subscriptionService.cartItemcount$.next(result);
        this.snackbarService.showSnackbar('one item added to cart');
      });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');

  }
  delete() {

    this.addedcart.splice(this.addedcart.indexOf(this.product), 1);

    this.addedcart = [...this.addedcart];
  }


  // increment product qty
  incrementQty() {
    console.log(this.qty + 1);
    this.qty += 1;
  }

  // decrement product qty
  decrementQty() {
    if (this.qty - 1 < 1) {
      this.qty = 1
      console.log('1->' + this.qty);
    } else {
      this.qty -= 1;
      console.log('2->' + this.qty);
    }
  }
  emptycart() {

  }
}

