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

  onDeleteProduct(id: number): void {
    this.deleteProduct.emit(id);
  }
}
