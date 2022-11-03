import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent implements OnInit {
  @Input() users?: User[];
  @Output() deleteUser = new EventEmitter();
  @Output() detailContact = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDeleteUser(user: User) {
    this.deleteUser.emit(user);
    console.log(user);
  }

  infoContact(user: User) {
    this.detailContact.emit(user);
  }
}
