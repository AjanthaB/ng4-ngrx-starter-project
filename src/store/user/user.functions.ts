import { UserState } from './user.state';
import * as UserAction from './user.actions';

export function AddUser(state: UserState, action: any): UserState {
  const newUsers = action.payload;
  if (newUsers != null) {
    const currentUsers = Object.assign({}, state.users);
    currentUsers[newUsers._id] = newUsers; // add new  user into store

    return Object.assign({}, state, {
      users: currentUsers
    });
  }

  return state;
}

export function IncrementUserCount(state: UserState, action: any): UserState {
  return Object.assign({}, state, {
    userCount: state.userCount + 1
  })
}