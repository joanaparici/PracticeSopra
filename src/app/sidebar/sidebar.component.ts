import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Product } from '../models/product';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() products!: Product[];
  @Output() filterCheaper = new EventEmitter<void>();
  @Output() filterExpensive = new EventEmitter<void>();
  @Output() filterPopular = new EventEmitter<void>();
  @Output() filterReset = new EventEmitter<void>();
  @Output() watchedProduct = new EventEmitter<number>();

  onFilterCheaper(): void {
    this.filterCheaper.emit();
  }

  onFilterExpensive(): void {
    this.filterExpensive.emit();
  }

  onFilterPopular(): void {
    this.filterPopular.emit();
  }

  onFilterReset(): void {
    this.filterReset.emit();
  }

  onWatchProduct(id: number): void {
    this.watchedProduct.emit(id);
  }
}
