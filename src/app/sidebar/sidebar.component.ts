import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Product } from '../models/product';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() products!: Product[];
  @Input() activeFilter!: string;
  @Input() selectedProduct!: Product | null;
  @Output() filterSelected = new EventEmitter<string>();
  @Output() watchedProduct = new EventEmitter<number>();

  onFilter(type: string): void {
    this.filterSelected.emit(type);
  }

  onWatchProduct(id: number): void {
    this.watchedProduct.emit(id);
  }
}
