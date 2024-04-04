import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Product } from '../../models/product';

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.scss'],
})
export class SimilarProductsComponent {
  @Input() selectedProduct!: Product | null;
  @Output() watchedProduct = new EventEmitter<number>();

  onWatchProduct(id: number): void {
    this.watchedProduct.emit(id);
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
}
