import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../app-state.interface';

export const selectFeuture = (state: AppStateInterface) => state.users;

export const selectUsers = createSelector(selectFeuture, (state) => state.data);
export const selectUserIds = createSelector(selectFeuture, (state) => state?.data.map(user => user.id) ?? []);
export const selectIsLoading = createSelector(selectFeuture, (state) => state?.isLoading?? false);
export const selectUserError = createSelector(selectFeuture, (state) => state.error);
