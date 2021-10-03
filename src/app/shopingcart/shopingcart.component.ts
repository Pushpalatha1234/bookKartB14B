import { Component, OnInit } from '@angular/core';
import { ShopingcartService } from '../shopingcart.service';

@Component({
	selector: 'app-shopingcart',
	templateUrl: './shopingcart.component.html',
	styleUrls: ['./shopingcart.component.scss']
})
export class ShopingCartComponent implements OnInit {
	cartItemList:any=[];
	qty:number=1;
	constructor(private shopingCartService: ShopingcartService) { }

	ngOnInit(){
		this.getcartItems();
	}
	getcartItems(){
		this.shopingCartService.getCartItemsByUserId().subscribe((data) => {              
			console.log(data);
			for(let i=0;i<data.length;i++){
				this.cartItemList.push(data[i].book);
			}
			console.log(this.cartItemList);
		});
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
	removeallcartItems(){
		alert("fsdf");
		this.cartItemList=[];
	}
	removecartItem(i:number){
		this.cartItemList.splice(i,1);
	}

}