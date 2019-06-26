import { Component, Input } from '@angular/core';
import { User } from '../../models/user'

@Component({
    selector: 'app-user-basic',
    templateUrl: './user-basic.component.html'
})

export class UserBasicComponent {
    @Input() user: User;
}