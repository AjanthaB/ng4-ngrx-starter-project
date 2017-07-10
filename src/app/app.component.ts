import { User } from './../models/user';
import { Observable } from 'rxjs/Rx';
import { GlobalState } from './../store/global.state';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { getUsersAsArray } from '../store/combine-selectors';
import * as UserActions from '../store/user/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-4 ngrx starter project';

  public users: Observable<User[]>;
  public user: User = {
    _id: '', // unique key for users
    firstName: '',
    lastName: ''
  };

  constructor(private store: Store<GlobalState>){
    this.users = this.store.select(getUsersAsArray);
  }

  public addUser(): void {
    const id = '_id';
    this.user[id] = this.randomId();
    this.store.dispatch(new UserActions.AddUser(this.user));
    this.setDefaultUser();
  }

  private setDefaultUser(): void {
    this.user = {
      _id: '', // unique key for users
      firstName: '',
      lastName: ''
    };
  }

  private randomId(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
