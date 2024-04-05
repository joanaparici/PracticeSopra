import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { HelpPageComponent } from './components/help-page/help-page.component';

const routes: Routes = [{ path: '', component: HelpPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpRoutingModule {}
