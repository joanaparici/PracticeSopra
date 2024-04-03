import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Product } from '../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  @Input() selectedProduct: Product | null = null;
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() changeFavorite = new EventEmitter<void>();

  onDeleteProduct(id: number): void {
    this.deleteProduct.emit(id);
  }

  onChangeFavorite(): void {
    this.changeFavorite.emit();
  }
}
