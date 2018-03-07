import { Product } from './products';
import { ShoppingCartItem } from './shopping-cart-items';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
    this.itemsMap = itemsMap || {};

    // creating shopping cart item object in the firebase database
    for (const productId in itemsMap) {
     // if (itemsMap.hasOwnProperty(productId)) {
        const item = itemsMap[productId];
        console.log(item);
        this.items.push(new ShoppingCartItem({
         // this line below is equivalet to title: item.title, item.imageUrl and price
         ...item, $key: productId }));
     // }
    }
  }

  getQuantity(product: Product) {
    const item = this.itemsMap[product.$key];
    return item ? item.quantity : 0;
  }

  get totalPrice() {
    let sum = 0;
    for (const productId in this.items) {
     // if (this.items.hasOwnProperty(productId)) {
        sum += this.items[productId].totalPrice;
      //}
    }
    return sum;
  }
  get totalItemsCount() {
    let count = 0;
    for (const productId in this.itemsMap) {
     // if (this.itemsMap.hasOwnProperty (productId)) {
        count += this.itemsMap[productId].quantity;
      //}
    }
    return count;
  }
  /* get totalItemsCount() {
    let count = 0;
    for (const productId of Object.keys(this.itemsMap) ) {
        count += this.itemsMap[productId].quantity;
    }
    return count;
  } */
}
