import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UserAction from './user.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserManagmentApiService } from '@app/features/user-managment/services/api.service';

@Injectable()
export class UserEffect {
  constructor(private actions: Actions, private userManagmentApiService: UserManagmentApiService) {}

  getRelatedProducts$ = createEffect(() =>
    this.actions.pipe(
      ofType(UserAction.getUsers),
      mergeMap((action) => {
        return this.userManagmentApiService.getUsers(action.userInput).pipe(
          map((users) => UserAction.getUsersSuccess({ users: users }))
          // catchError((error) => of(ProductAction.getRelatedProductsFailure({ error: error.message })))
        );
      })
    )
  );
}
