export class Address {
  id: number;
  code: string;
  name: string;
  address1: string;
  address2: string;
  address3: string;
  city: string;
  state: string;
  zipCode: string;
  active: boolean;
  dateCreated: string;

  constructor(
    id: number,
    code: string,
    name: string,
    address1: string,
    address2: string,
    address3: string,
    city: string,
    state: string,
    zipCode: string,
    active: boolean = true,
    dateCreated: string = new Date().toISOString()
  ) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.address1 = address1;
    this.address2 = address2;
    this.address3 = address3;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.active = active;
    this.dateCreated = dateCreated;
  }
}