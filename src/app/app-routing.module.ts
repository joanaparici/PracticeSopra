import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { passwordGuard } from './modules/shared/guards/password.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'help',
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    loadChildren: () =>
      import('./modules/help/help.module').then((m) => m.HelpModule),
    canActivate: [passwordGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
