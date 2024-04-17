import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Product } from '../../models/product';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ProductDataService } from 'src/app/services/productData/product-data.service';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  @Input() selectedProduct: Product | null = null;
  @Input() isSelectedProductOnCart: boolean | undefined;
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() changeFavorite = new EventEmitter<void>();
  @Output() addProductToCart = new EventEmitter<Product>();

  constructor(
    private readonly productService: ProductDataService,
    private readonly cartService: CartService,
  ) {}

  onDeleteProduct(id: number): void {
    this.deleteProduct.emit(id);
  }

  onChangeFavorite(): void {
    this.changeFavorite.emit();
  }

  onAddProductToCart(): void {
    if (this.selectedProduct != null) {
      this.addProductToCart.emit(this.selectedProduct);
    }
  }
}
