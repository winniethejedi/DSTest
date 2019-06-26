import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        UserListComponent
    ],
    exports: [
        UserListComponent
    ]
})

export class UsersModule { }
