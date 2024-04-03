// import { type HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { productsData } from './products';
import { type Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  originalProducts: Product[] = [...productsData];
  products: Product[] = [...productsData];
  selectedProduct: Product | null = null;
  defaultProduct = 0;
  activeFilter: string = '';

  ngOnInit(): void {
    this.selectedProduct = this.products[this.defaultProduct];
  }

  watchProduct(id: number): void {
    const product = this.products.find((product) => product.id === id);
    if (product != null) {
      this.selectedProduct = product ?? null;
    }
  }

  deleteProduct(id: number): void {
    const index = this.products.findIndex((product) => product.id === id);
    this.products = this.products.filter((product) => product.id !== id);

    if (this.products.length > 0) {
      this.selectedProduct = this.products[Math.max(0, index - 1)];
    } else {
      this.selectedProduct = null;
    }
  }

  filterCheaper(): void {
    this.activeFilter = this.activeFilter === 'cheaper' ? '' : 'cheaper';
    console.log(this.activeFilter);
    this.products = this.originalProducts.filter(
      (product) => product.price < 2000,
    );
  }

  filterExpensive(): void {
    this.activeFilter = this.activeFilter === 'expensive' ? '' : 'expensive';
    this.products = this.originalProducts.filter(
      (product) => product.price > 2000,
    );
  }

  filterPopular(): void {
    this.activeFilter = this.activeFilter === 'popular' ? '' : 'popular';
    this.products = this.originalProducts.filter(
      (product) => product.rating >= 4.5,
    );
  }

  filterReset(): void {
    this.activeFilter = '';
    this.products = this.originalProducts;
  }

  changeFavorite(): void {
    if (this.selectedProduct != null) {
      this.selectedProduct.favorite = !this.selectedProduct.favorite;
    }
  }

  filterChanged(newFilter: string): void {
    this.activeFilter = newFilter;
  }
}
