import React from 'react'
import './cart-item.styles.scss'
import { CartItemContainer, CartItemImage, ItemDetailsContainer, NameContainer } from './cart-item.styles'
export const CartItem = ({ item: {imageUrl, price, name, quantity}}) => {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt='item' />
            <ItemDetailsContainer >
                <NameContainer >{name}</NameContainer>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}
