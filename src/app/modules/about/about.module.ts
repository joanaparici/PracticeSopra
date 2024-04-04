import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { FooterAboutComponent } from './components/footer-about/footer-about.component';

@NgModule({
  declarations: [AboutPageComponent, SubscribeComponent, AboutSectionComponent, FooterAboutComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
