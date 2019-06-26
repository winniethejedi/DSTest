import { Component, Input } from '@angular/core';
import { User } from '../../models/user'

@Component({
    selector: 'app-user-detailed',
    templateUrl: './user-detailed.component.html'
})

export class UserDetailedComponent {
    @Input() user: User;
}