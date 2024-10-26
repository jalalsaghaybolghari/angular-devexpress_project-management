import { UserStateInterface } from './users/user-state.interface';

export interface AppStateInterface {
  readonly users: UserStateInterface;
}
