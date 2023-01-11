import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { OpinionsPageComponent } from './opinions-page/opinions-page.component';

const routes: Routes = [
  {
    path: "", component: WelcomePageComponent
  }, 
  {
    path: "about", component: AboutUsPageComponent
  },
  {
    path: "contact", component: ContactUsPageComponent
  },
  {
    path: "opinions", component: OpinionsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
