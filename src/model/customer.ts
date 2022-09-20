import { Phone } from "./phone";

export class Customer {
  id: string;
  name: string;
  created: Date;
  customerType: string;
  cpfCnpj: string;
  rgIe: string;
  active: string;
  phone: Phone[];

  constructor(
    id: string,
    name: string,
    created: Date,
    customerType: string,
    cpfCnpj: string,
    rgIe: string,
    active: string,
    phone: Phone[],
  ) {
    this.id = id;
    this.name = name;
    this.created = created;
    this.customerType = customerType;
    this.cpfCnpj = cpfCnpj;
    this.rgIe = rgIe;
    this.active = active;
    this.phone = phone;
  }
}
