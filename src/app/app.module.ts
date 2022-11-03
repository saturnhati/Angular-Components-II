import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressBookPage } from './address-book/address-book.page';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddAddressComponent } from './address-book/add-address/add-address.component';
import { AddressListComponent } from './address-book/address-list/address-list.component';
import { AddressDetailsComponent } from './address-book/address-details/address-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddressBookPage,
    HeaderComponent,
    FooterComponent,
    AddAddressComponent,
    AddressListComponent,
    AddressDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
