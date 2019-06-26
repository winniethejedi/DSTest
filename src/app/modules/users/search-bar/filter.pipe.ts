import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../models/user';

@Pipe({
    name: 'filter'
})

export class FilterUserPipe implements PipeTransform {
    transform(users: User[], searchText: string): User[] {
        if (!users) return [];
        if (!searchText) return users;
        searchText = searchText.toLowerCase();
        return users.filter(user => {
            const matchesName = user.name.toLowerCase().includes(searchText);
            const matchesUsername = user.username.toLowerCase().includes(searchText);
            const matchesEmail = user.email.toLowerCase().includes(searchText);
            const match = matchesName || matchesUsername || matchesEmail;

            return match;
        });
    }
}