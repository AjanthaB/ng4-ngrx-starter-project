import { type } from './../action.utils';
export { ActionReducer } from '@ngrx/store';

import { UserState, initialState } from './user.state';
import * as UserActions from './user.actions';
import * as UserFuntions from './user.functions';


export function UserReducer(state: UserState = initialState, action: UserActions.Actions): UserState {
  switch(action.type) {
    case UserActions.ActionTypes.ADD_USER:
      return UserFuntions.AddUser(state, action);

    case UserActions.ActionTypes.INCREMENT_USER_COUNT:
      return UserFuntions.IncrementUserCount(state, action);

    default:
      return state;
  }
}