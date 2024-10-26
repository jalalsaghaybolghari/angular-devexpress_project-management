import { UserStateInterface } from "./user-state.interface";
import { createReducer, on } from '@ngrx/store';
import * as UserAction from './user.actions';


export const initialState: UserStateInterface = {
  isLoading: false,
  data: [],
  error: null
};

export const userReducers = createReducer(
  initialState,
  on(UserAction.getUsers, (state) => ({ ...state, isLoading: false })),
  on(UserAction.getUsersSuccess, (state,action) => ({ ...state, isLoading: false , data:action.users })),
  on(UserAction.getUsersFailure, (state,action) => ({ ...state, isLoading: false , error:action.error }))
);
