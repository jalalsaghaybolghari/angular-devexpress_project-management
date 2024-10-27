import { User } from "@features/user-managment/user-managment.model";

export interface UserStateInterface {
    isLoading: boolean,
    data: User[],
    error: string | null
}