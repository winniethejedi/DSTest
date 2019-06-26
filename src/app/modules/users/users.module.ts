import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserBasicComponent } from './user-basic/user-basic.component';
import { FilterUserPipe } from './search-bar/filter.pipe';
import { FormsModule }   from '@angular/forms';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        UserListComponent,
        UserBasicComponent,
        FilterUserPipe
    ],
    exports: [
        UserListComponent,
        UserBasicComponent,
        FilterUserPipe
    ]
})

export class UsersModule { }
