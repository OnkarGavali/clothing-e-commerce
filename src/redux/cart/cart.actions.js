import { CartActionsType } from "./cart.types";

export const toggleCartHidden = () => ({
    type : CartActionsType.TOGGLE_CART_HIDDEN
});


export const addItem = item => ({
    type : CartActionsType.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type : CartActionsType.REMOVE_ITEM,
    payload: item
});
export const decrementItemCount = item => ({
    type : CartActionsType.DECREMENT_ITEM_COUNT,
    payload : item
})