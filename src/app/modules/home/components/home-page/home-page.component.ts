import { Component, type OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { type Product } from 'src/app/modules/home/models/product';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { CartService } from 'src/app/services/cart/cart.service';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ProductDataService } from 'src/app/services/productData/product-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  products: Product[] = [];
  cartProducts: { product: Product; quantity: number }[] = [];
  selectedProduct: Product | null = null;
  isSelectedProductOnCart = false;
  activeFilter = '';

  private originalProducts: Product[] = [];
  private defaultProduct = 0;
  private cardServiceSubscription: Subscription | null = null;
  private readonly filterActions = {
    cheaper: () =>
      this.originalProducts.filter((product) => product.price < 2000),
    expensive: () =>
      this.originalProducts.filter((product) => product.price > 2000),
    popular: () =>
      this.originalProducts.filter((product) => product.rating >= 4.5),
    reset: () => [...this.originalProducts],
  };

  constructor(
    private readonly productService: ProductDataService,
    private readonly cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.productService.getProducts();
    this.productService.products$.subscribe((data) => {
      this.products = data;
      this.originalProducts = [...this.products];
      this.selectNewProduct(this.products[this.defaultProduct]);
    });

    this.cardServiceSubscription = this.cartService.cartProducts$.subscribe(
      (products) => {
        this.cartProducts = products;
      },
    );
  }

  //Metodos publicos
  addProductToCart(product: Product): void {
    this.cartService.addProductToCart(product);
    this.updateSelectedProductOnCart();
  }

  filterChanged(newFilter: string) {
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

  deleteProduct(id: number): void {
    const index = this.products.findIndex((product) => product.id === id);
    this.products = this.products.filter((product) => product.id !== id);

    let nextPreoduct = null;

    if (this.products.length) {
      nextPreoduct = this.products[Math.max(0, index - 1)];
    }
    this.selectNewProduct(nextPreoduct);
    this.cartService.deleteCartProducts(id);
  }

  changeFavorite(): void {
    if (this.selectedProduct != null) {
      this.selectedProduct.favorite = !this.selectedProduct.favorite;
    }
  }

  watchProduct(id: number): void {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      this.selectNewProduct(product);
    }
  }

  //Metodos privados
  private selectNewProduct(product: Product | null): void {
    this.selectedProduct = product;
    this.updateSelectedProductOnCart();
  }

  private updateSelectedProductOnCart() {
    this.isSelectedProductOnCart = this.cartProducts.some(
      (item) => item.product.id === this.selectedProduct?.id,
    );
  }
}
