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
  title = 'app works!';

  public users: Observable<User[]>;
  public user: User = {
    _id: '',
    firstName: '',
    lastName: ''
  };

  constructor(private store: Store<GlobalState>){
    this.users = this.store.select(getUsersAsArray);
  }

  public addUser(): void {
    console.log(this.user);
    // this.store.dispatch(new UserActions.AddUser(this.user));
  }
}
