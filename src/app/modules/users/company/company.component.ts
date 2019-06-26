import { Component, Input } from '@angular/core';
import { Company } from '../../models/company'

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html'
})

export class CompanyComponent {
    @Input() company: Company;
}