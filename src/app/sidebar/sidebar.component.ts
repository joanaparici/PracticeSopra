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
  @Output() filterCheaper = new EventEmitter<void>();
  @Output() filterExpensive = new EventEmitter<void>();
  @Output() filterPopular = new EventEmitter<void>();
  @Output() filterReset = new EventEmitter<void>();
  @Output() watchedProduct = new EventEmitter<number>();
  @Output() filterChanged = new EventEmitter<string>();

  onFilterCheaper(): void {
    this.filterCheaper.emit();
    this.filterChanged.emit('cheaper');
  }

  onFilterExpensive(): void {
    this.filterExpensive.emit();
    this.filterChanged.emit('expensive');
  }

  onFilterPopular(): void {
    this.filterPopular.emit();
    this.filterChanged.emit('popular');
  }

  onFilterReset(): void {
    this.filterReset.emit();
    this.filterChanged.emit('');
  }

  onWatchProduct(id: number): void {
    this.watchedProduct.emit(id);
  }
}
