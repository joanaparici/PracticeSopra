import { type Review } from './review';

export interface Product {
  id: number;
  product: string;
  price: number;
  currency: string;
  rating: number;
  description: string;
  similarProducts?: Product[];
  reviews?: Review[] | null;
}
