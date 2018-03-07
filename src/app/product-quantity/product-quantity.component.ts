import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/products';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {
  @Input('product') product: Product;
  @Input ('shoppingCart') shoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
   this.cartService.addToCart(this.product);
    console.log(this.product);
  }
  removeFromCart() {
    this.cartService.removeFromCart(this.product);
   }

   ngOnInit() {
  }

}
