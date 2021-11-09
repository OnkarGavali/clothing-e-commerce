import { UserActionsType } from "./user.types";

export const setCurrentUser = user => ({
    type : UserActionsType.SET_CURRENT_USER,
    payload : user
});