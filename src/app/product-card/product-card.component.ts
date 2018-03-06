import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/products';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
  @Input('product') product: Product;
  @Input('showActions') showActions = true;
  @Input ('shopping-cart') shoppingCart;
  constructor(private cartService: ShoppingCartService) { }

  addToCart(product: Product) {
   this.cartService.addToCart(product);
  }
  getQuantity() {
    if (!this.shoppingCart) {
      return 0;
    }
    const item = this.shoppingCart.items[this.product.$key];
    return item ? item.quantity : 0;
  }
}
