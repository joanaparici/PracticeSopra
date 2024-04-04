import { type Review } from './review';

export interface Product {
  id: number;
  product: string;
  price: number;
  currency: string;
  rating: number;
  favorite: boolean;
  description: string;
  similarProducts?: Product[];
  reviews?: Review[] | null;
}
