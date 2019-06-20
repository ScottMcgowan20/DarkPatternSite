import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DonationComponent } from './donation/donation.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const appRoutes = [
  {
    path: 'view-cart',
    component: CartComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'view-cart/donation',
    component: DonationComponent,
  }
];
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    DonationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
