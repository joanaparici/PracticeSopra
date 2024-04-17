import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {
  HomePageComponent,
  ProductDetailsComponent,
  ReviewsComponent,
  SidebarComponent,
  SimilarProductsComponent,
  StarsRatingComponent,
} from './components';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SidebarComponent,
    ProductDetailsComponent,
    SimilarProductsComponent,
    StarsRatingComponent,
    ReviewsComponent,
    CartComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
