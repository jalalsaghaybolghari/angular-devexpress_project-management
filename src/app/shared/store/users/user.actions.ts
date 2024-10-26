import { User, UserInput } from '@app/features/user-managment/user-managment.model';
import { createAction, props } from '@ngrx/store';

export const getUsers = createAction(`[Users] get users`, props<{ userInput: UserInput }>());
export const getUsersSuccess = createAction(`[Users] get users success`, props<{ users: User[] }>());
export const getUsersFailure = createAction(`[Users] get users failure`, props<{ error: string }>());
