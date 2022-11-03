import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressBookPage } from './address-book/address-book.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'addressBook',
  },
  {
    path: 'addressBook',
    component: AddressBookPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
