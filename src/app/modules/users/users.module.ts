import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserBasicComponent } from './user-basic/user-basic.component';
import { UserDetailedComponent } from './user-detailed/user-detailed.component';
import { UserAllComponent } from './user-all/user-all.component';
import { FilterUserPipe } from './search-bar/filter.pipe';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        UserListComponent,
        UserBasicComponent,
        FilterUserPipe,
        UserDetailedComponent,
        UserAllComponent,
        AddressComponent,
        CompanyComponent
    ],
    exports: [
        UserListComponent,
        UserBasicComponent,
        FilterUserPipe,
        UserDetailedComponent,
        UserAllComponent,
        AddressComponent,
        CompanyComponent
    ]
})

export class UsersModule { }
