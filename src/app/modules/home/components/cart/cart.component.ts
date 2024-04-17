import { Component } from '@angular/core';
import { type Product } from '../../models/product';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { CartService } from 'src/app/services/cart/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public cartProducts: { product: Product; quantity: number }[] = [];
  cardServiceSubscription: Subscription | null = null;

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cardServiceSubscription = this.cartService.cartProducts$.subscribe(
      (products) => {
        this.cartProducts = products;
      },
    );
  }

  ngOnDestroy(): void {
    this.cardServiceSubscription?.unsubscribe();
  }
  deleteProduct(productId: number) {
    this.cartService.deleteCartProducts(productId);
  }
}
