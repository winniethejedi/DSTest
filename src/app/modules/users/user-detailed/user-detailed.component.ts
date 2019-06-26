import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user'

@Component({
    selector: 'app-user-detailed',
    templateUrl: './user-detailed.component.html'
})

export class UserDetailedComponent {
    @Input() user: User;
    @Input() open: boolean = false;
    @Output() openChange = new EventEmitter();

    handleUserDetailedClick() {
        this.open = !this.open;
        this.openChange.emit(this.open);
        console.log(this.open);
    }

    ngOnChanges() {
        if (this.open) {

        }
        else {

        }
    }
}