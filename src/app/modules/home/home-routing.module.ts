import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
