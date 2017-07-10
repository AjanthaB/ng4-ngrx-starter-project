import { UserState } from './user/user.state';

export type EntityMap <T> = {[id: string]: T};

export interface GlobalState {
  user: UserState // can defined multiple states
}

