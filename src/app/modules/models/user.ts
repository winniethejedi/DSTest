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

    // constructor() {
    //     this.name = 'Craig Parker';
    //     this.username = 'craigparker';
    //     this.email = 'mcraigparker123@gmail.com';
    //     this.phone = 'N/A';
    //     this.website = 'https://craig-parker.firebaseapp.com';
    // }
  }