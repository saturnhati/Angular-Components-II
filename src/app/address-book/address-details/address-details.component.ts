import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss'],
})
export class AddressDetailsComponent implements OnInit {
  @Input() contact?: User;
  @Output() varContact = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  closeInfo() {
    let contactInfo = null;
    this.varContact.emit(contactInfo);
  }
}
