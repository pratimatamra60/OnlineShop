import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../models/products';
import { DataTableModule, DataTableResource } from 'angular5-data-table';


@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnDestroy  {
products: Product [];
subscription: Subscription;
tableResource: DataTableResource<Product>;
items: Product[] = [];
itemCount: number;


  constructor(private productService: ProductService) {
  this.subscription = this.productService.getAll()
  .subscribe(products => {
    this.products = products;
    this.initializeTable(products);
  });
  }

  private initializeTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 })
    .then(items => this.items = items);
    this.tableResource.count()
    .then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) {
       return;
      }
    this.tableResource.query(params)
    .then(items => this.items = items);
  }
  /*for small items like 1000 its better to filter at a client side.
  this downloads all the item at a page load and then filter
  so put all the products in an array*/
  filter(query: string) {

    const filteredProducts = (query) ?
    this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
    this.products;
    this.initializeTable(filteredProducts);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
