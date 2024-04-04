import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';

const routes: Routes = [{ path: '', component: AboutPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
