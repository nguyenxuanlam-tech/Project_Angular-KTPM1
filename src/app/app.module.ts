import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CardComponent } from './Components/card/card.component';
import { AdminComponent } from './Components/admin/admin.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NavComponent } from './Components/nav/nav.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductlistComponent } from './Components/productlist/productlist.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { Router, Routes } from '@angular/router';

const routes: Routes = [
{path : 'login', component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    ContactComponent,
    HomeComponent,
    ProductlistComponent,
    CheckoutComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
