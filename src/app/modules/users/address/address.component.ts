import { Component, Input } from '@angular/core';
import { Address } from '../../models/address'

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html'
})

export class AddressComponent {
    @Input() address: Address;
}