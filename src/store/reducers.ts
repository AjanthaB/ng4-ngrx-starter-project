import { ActionReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { UserReducer } from './user/user.reducer';

const reducers = {
  user: UserReducer
}

// development perpose only
const developmentReducer: ActionReducer<any> = compose(storeFreeze, combineReducers)(reducers);
const actualReducer: ActionReducer<any> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return developmentReducer(state, action);
}