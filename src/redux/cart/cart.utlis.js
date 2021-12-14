export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    
    if ( existingCartItem ) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity +1 } : cartItem );
    }

    return [...cartItems, { ...cartItemToAdd, quantity:1}]
}

export const decrementItem = (cartItems, cartItemToDecrement) => {
    const existingCartItem = cartItems.find(cartItem => 
      cartItem.id === cartItemToDecrement.id
    )
    if(existingCartItem && existingCartItem.quantity ===1){
        return cartItems.filter( cartItem => cartItem.id !== cartItemToDecrement.id) 
    }
    else if(existingCartItem && existingCartItem.quantity >1){
        return cartItems.map( 
            cartItem => cartItem.id === cartItemToDecrement.id 
                ? { ...cartItem, quantity : cartItem.quantity -1}
                : cartItem
        )
    }
}