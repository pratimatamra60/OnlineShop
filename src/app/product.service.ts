import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }
  create(product) {
    return this.db.list('/products').push(product);
  }

  /*for printing all the products list on product page
  we need to get all the product list from the database*/
  getAll() {
    return  this.db.list('/products');
  }
  get(productId) {
    return this.db.object('/products/' + productId);
  }

  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }
  delete(productId) {
    return this.db.object('/produts' + productId).remove();
  }
}
