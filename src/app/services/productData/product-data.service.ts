import { Injectable } from '@angular/core';
import { type Product } from '../../modules/home/models/product';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  private readonly products: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);

  public products$ = this.products.asObservable();

  constructor(private readonly http: HttpClient) {}

  getProducts(): void {
    this.http.get<Product[]>('assets/data/productos.json').subscribe((data) => {
      this.products.next(data);
    });
  }
}
