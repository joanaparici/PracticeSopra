import { Component } from '@angular/core';
import { productsData } from './products';
import { type Product } from './models/product';

// type Filters = 'cheaper' | 'expensive' | 'popular' | 'reset';

// type FilterType = {
//   [key in Filters]: () => void;
// };

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
  activeFilter = '';

  ngOnInit(): void {
    this.selectedProduct = this.products[this.defaultProduct];
  }

  // public filters: FilterType = {
  //   cheaper: () => {
  //     this.filterCheaper();
  //   },
  //   expensive: () => {
  //     this.filterExpensive();
  //   },
  //   popular: () => {
  //     this.filterPopular();
  //   },
  //   reset: () => {
  //     this.filterReset();
  //   },
  // };

  // filterChanged(newFilter: string): void {
  //   const isSelected = this.activeFilter === newFilter;
  //   this.activeFilter = newFilter;
  //   if (isSelected) {
  //     this.activeFilter = '';
  //     this.filterReset();
  //     return;
  //   }
  //   this.filters[newFilter as Filters]();
  // }

  // filterCheaper(): void {
  //   this.products = this.originalProducts.filter(
  //     (product) => product.price < 2000,
  //   );
  // }

  // filterExpensive(): void {
  //   this.products = this.originalProducts.filter(
  //     (product) => product.price > 2000,
  //   );
  // }

  // filterPopular(): void {
  //   this.products = this.originalProducts.filter(
  //     (product) => product.rating >= 4.5,
  //   );
  // }

  // private filterReset(): void {
  //   this.activeFilter = '';
  //   this.products = this.originalProducts;
  // }

  private readonly filterActions = {
    cheaper: () =>
      this.originalProducts.filter((product) => product.price < 2000),
    expensive: () =>
      this.originalProducts.filter((product) => product.price > 2000),
    popular: () =>
      this.originalProducts.filter((product) => product.rating >= 4.5),
    reset: () => [...this.originalProducts],
  };

  filterChanged(newFilter: string): void {
    if (this.activeFilter === newFilter) {
      this.activeFilter = '';
      this.products = this.filterActions.reset();
      return;
    }
    this.activeFilter = newFilter;
    const action =
      this.filterActions[newFilter as keyof typeof this.filterActions];
    this.products = action();
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

  changeFavorite(): void {
    if (this.selectedProduct != null) {
      this.selectedProduct.favorite = !this.selectedProduct.favorite;
    }
  }
}
