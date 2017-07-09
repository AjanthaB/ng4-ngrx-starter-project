import { Action } from '@ngrx/store';
import { type } from './../action.utils';
import { User } from '../../models/user';

export const ActionTypes = {
    ADD_USER: type('ADD_USER'),
    REMOVE_USER: type('REMOVE_USER'),
    INCREMENT_USER_COUNT: type('INCREMENT_USER_COUNT')
};

export type Actions
  = AddUser
  | RemoveUser;

// user add action
export class AddUser implements Action {
  public type = ActionTypes.ADD_USER;
  public payload: User;

  constructor(private user: User) {
    this.payload = user;
  }
}

// increment user count by 1
export class IncrementserCount implements Action {
  public type = ActionTypes.INCREMENT_USER_COUNT;
  public payload: null;
}

//  remove uses from state
export class RemoveUser implements Action {
  public type = ActionTypes.REMOVE_USER;
  public payload: User;

  constructor(private user: User) {
    this.payload = user;
  }
}