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
  originalProducts: Product[] = productsData;
  products: Product[] = productsData;
  selectedProduct: Product | null = null;

  ngOnInit(): void {
    this.selectedProduct = this.products[0];
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

    this.products.forEach((product) => {
      if (product.similarProducts != null) {
        product.similarProducts = product.similarProducts.filter(
          (similarProduct) => similarProduct.id !== id,
        );
      }
    });

    if (this.products.length > 0) {
      this.selectedProduct = this.products[Math.max(0, index - 1)];
    } else {
      this.selectedProduct = null;
    }
  }

  getStarList(rating: number): string[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push('bi-star-fill');
      } else if (rating >= i - 0.5) {
        stars.push('bi-star-half');
      } else {
        stars.push('bi-star');
      }
    }
    return stars;
  }

  filterCheaper(): void {
    this.resetFilter();
    this.products = this.originalProducts.filter(
      (product) => product.price < 2000,
    );
  }

  filterExpensive(): void {
    this.resetFilter();
    this.products = this.originalProducts.filter(
      (product) => product.price > 2000,
    );
  }

  filterPopular(): void {
    this.resetFilter();
    this.products = this.originalProducts.filter(
      (product) => product.rating >= 4.5,
    );
  }

  resetFilter(): void {
    this.products = this.originalProducts;
  }
}
