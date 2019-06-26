import { Address } from './address';
import { Company } from './company';

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: Company;
    address: Address;
  }