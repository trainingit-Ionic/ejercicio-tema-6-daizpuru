import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { USERS } from 'src/app/data/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  get(): Observable<User[]> {
    return of(USERS).pipe(delay(1000));
  }

  getOne(id: number): Observable<User> {
    const users = USERS;
    const user = users.find((u) => u.id === id);
    return of(user).pipe(delay(1000));
  }
}
