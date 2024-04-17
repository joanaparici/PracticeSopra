import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { type Product } from 'src/app/modules/home/models/product';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts = new BehaviorSubject<
    { product: Product; quantity: number }[]
  >([]);
  public cartProducts$ = this.cartProducts.asObservable();

  constructor() {
    this.loadCartProducts();
  }

  loadCartProducts(): void {
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart != null) {
      this.cartProducts.next(JSON.parse(storedCart));
    }
  }

  addProductToCart(product: Product): void {
    const currentCart = this.cartProducts.value;
    const cartProduct = currentCart.find(
      (item) => item.product.id === product.id,
    );
    if (cartProduct) {
      cartProduct.quantity += 1;
    } else {
      currentCart.push({ product, quantity: 1 });
    }
    this.cartProducts.next(currentCart);
    this.saveCartProducts();
  }

  saveCartProducts(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.cartProducts.value));
  }

  deleteCartProducts(productId: number): void {
    const updatedCart = this.cartProducts.value.filter(
      (item) => item.product.id !== productId,
    );
    this.cartProducts.next(updatedCart);
    this.saveCartProducts();
  }
}
