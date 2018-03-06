import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }
  private create() {
    this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }
  private getCart(cartId: string) {
    return this.db.object('/shopping-carts/' + cartId)
  }
  private async getOrCreateCart() {
    const cardId = localStorage.getItem('cartId');
    if (!cardId) {
      const result = await this.create();
      localStorage.setItem('cardId', result.key);
      return this.getCart(result.key);
    }
      return this.getCart(cardId);
    }
  }
