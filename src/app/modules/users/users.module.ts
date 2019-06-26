import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserBasicComponent } from './user-basic/user-basic.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        UserListComponent,
        UserBasicComponent
    ],
    exports: [
        UserListComponent,
        UserBasicComponent
    ]
})

export class UsersModule { }
