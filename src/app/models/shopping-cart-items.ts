import { Product } from './products';

export class ShoppingCartItem {
  $key: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;
/* an init can be an objec that looks like a shopping cart
item object. it can have one or more properties*/
constructor(init?: Partial<ShoppingCartItem>) {
  /*this object assigns to copy all those properties of this init into this current object*/
    Object.assign(this, init);
}
  get totalPrice() {
    return this.price * this.quantity;
  }
}
