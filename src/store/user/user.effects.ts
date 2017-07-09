import { User } from './../../models/user';
import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';

import { GlobalState } from './../global.state';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private store: Store<GlobalState>) {}

  //  this effect will run when ADD_USER action dispatch from anyware and dispath IncrementUserCount action
  @Effect() private incrementUserCount = this.actions$
    .ofType(UserActions.ActionTypes.ADD_USER)
    .mergeMap((action: UserActions.AddUser) => {
      const increment$ = Observable.of(new UserActions.IncrementserCount());
      return increment$;
      // here you can combine any number of action
    });
}
