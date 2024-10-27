import { ActionReducerMap } from '@ngrx/store';
import { AppStateInterface } from './app-state.interface';
import { UserEffect, userReducers } from './users';

export const reducers: ActionReducerMap<AppStateInterface> = {
  users: userReducers
};

export const effects = [UserEffect];
