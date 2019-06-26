import { Component, Input } from '@angular/core';
import { User } from '../../models/user'

@Component({
    selector: 'app-user-all',
    templateUrl: './user-all.component.html'
})

export class UserAllComponent {
    @Input() user: User;
}