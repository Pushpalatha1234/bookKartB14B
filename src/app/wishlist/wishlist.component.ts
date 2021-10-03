import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/wishlist.service';

@Component({
	selector: 'app-wishlist',
	templateUrl: './wishlist.component.html',
	styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
	bookwistList:any=[];
	constructor(private wishListSerivce: WishlistService) { }

	ngOnInit(): void {
		this.getwishListItems();
	}
	getwishListItems(){
		this.wishListSerivce.wishList().subscribe((data) => {              
			console.log(data);
			this.bookwistList=data;
			console.log(this.bookwistList);
		});
	}
	removeWishList(){
		alert('hi');
		/*this.bookService.removewishListItem().subscribe((data) => {              
			console.log(data);
		});
		*/
		this.bookwistList=[];

	}
	removewishListItem(i:number){
		alert("fsdf"+i);
		this.bookwistList.splice(i,1);
	}
 
}