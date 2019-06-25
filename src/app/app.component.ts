import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';

interface User {
  name: string,
  username: string,
  email: string,
  address: string,
  phone: string,
  website: string,
  companyName: string,
  companyBusinessStrategy: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'DSTest';
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  users$: Observable<User[]>;

  constructor(private http:HttpClient) {
    
  }

  ngOnInit() {
    this.users$ = this.http
      .get<User[]>(this.apiUrl).pipe(
          map(data => _.values(data)
        )
      );
  }
}
