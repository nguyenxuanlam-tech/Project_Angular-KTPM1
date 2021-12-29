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
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ProductdetailComponent } from './Components/productdetail/productdetail.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'productlist', component: ProductlistComponent },
  { path: 'productdetail', component: ProductdetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotfoundComponent }
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
    ProductdetailComponent,
    CheckoutComponent,
    PaymentComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
