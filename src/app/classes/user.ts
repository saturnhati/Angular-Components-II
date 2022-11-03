export class User {
  name: string;
  lastName: string;
  city: string;
  phoneNumber?: number | undefined;
  constructor(
    name: string,
    lastName: string,
    city: string,
    phoneNumber: number | undefined
  ) {
    this.name = name;
    this.lastName = lastName;
    this.city = city;
    this.phoneNumber = phoneNumber;
  }
}
