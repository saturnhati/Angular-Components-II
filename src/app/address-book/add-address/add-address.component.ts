import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss'],
})
export class AddAddressComponent implements OnInit {
  constructor() {}

  @Output() sendUser = new EventEmitter();

  ngOnInit(): void {}

  name: string = '';
  lastName: string = '';
  city: string = '';
  phoneNumber?: number | undefined;

  addUser() {
    let user = new User(this.name, this.lastName, this.city, this.phoneNumber);
    this.sendUser.emit(user);
    console.log(user);
  }
}
