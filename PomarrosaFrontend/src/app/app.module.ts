import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { SlidenavComponent } from './slidenav/slidenav.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { AboutUsMessageComponent } from './about-us-message/about-us-message.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavBarComponent,
    CarrouselComponent,
    WelcomeMessageComponent,
    SlidenavComponent,
    AboutUsPageComponent,
    AboutUsMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
