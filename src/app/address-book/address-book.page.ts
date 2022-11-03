import { Component, ContentChildDecorator, Input, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  templateUrl: './address-book.page.html',
  styleUrls: ['./address-book.page.scss'],
})
export class AddressBookPage implements OnInit {
  infoContact?: User;

  constructor() {}

  ngOnInit(): void {}

  users: User[] = [
    {
      name: 'Mario',
      lastName: 'Rossi',
      city: 'Milano',
      phoneNumber: 3492786542,
    },
    {
      name: 'Luigi',
      lastName: 'Verdi',
      city: 'Roma',
      phoneNumber: 3492746142,
    },
  ];

  addUser(user: User) {
    this.users.push(user);
  }

  onDeleteUser(user: User) {
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }

  onInfoContact(user: User) {
    this.infoContact = user;
  }
}
