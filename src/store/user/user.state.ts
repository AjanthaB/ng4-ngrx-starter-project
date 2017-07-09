import { User } from './../../models/user';
import { EntityMap } from '../global.state';

export interface UserState {
  users: EntityMap<User>;
  userCount: number;
}

export const initialState: UserState = {
  users: {},
  userCount: 0
};

// selectors to get users
export const getUsers = (state: UserState) => state.users;
export const getUserCount = (state: UserState) => state.userCount;
