
import { User } from '../models/user';
import { GlobalState } from './global.state';
import { createSelector } from 'reselect';

import * as fromUser from './user/user.state';
// import all states here and use createSelectors to combine

export const getUserState = (state: GlobalState) => state.user;

// user
export const getUserUsers = createSelector(getUserState,fromUser.getUsers);

//  combine selectors goes here
export const getUsersAsArray = createSelector(getUserUsers,
  (users) => {
     if (users == null) {
       return [];
     }
     return users;
  });