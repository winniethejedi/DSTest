import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user'

@Component({
    selector: 'app-user-basic',
    templateUrl: './user-basic.component.html'
})

export class UserBasicComponent {
    @Input() user: User;
    @Input() open: boolean = false;
    @Output() openChange = new EventEmitter();

    handleUserBasicClick() {
        this.open = !this.open;
        this.openChange.emit(this.open);
    }
}