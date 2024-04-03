import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { StarsRatingComponent } from './stars-rating/stars-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ProductDetailsComponent,
    SimilarProductsComponent,
    ReviewsComponent,
    StarsRatingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
