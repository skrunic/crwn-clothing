import { UserActionTypes } from './user.types';

// Redux action
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER, 
    payload: user
});