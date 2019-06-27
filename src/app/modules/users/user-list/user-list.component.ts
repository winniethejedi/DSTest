import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { map, tap } from 'rxjs/operators';
import { User } from '../../models/user';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html'
})

export class UserListComponent implements OnInit {
    title = 'DSTest';
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';
    users$: Observable<User[]>;
    searchText: string;
    noData;

    constructor(private http: HttpClient) {

    }

    ngOnInit() {
        this.users$ = this.http
            .get<User[]>(this.apiUrl).pipe(
                map(data => _.values(data)
                )
            );
    }
}