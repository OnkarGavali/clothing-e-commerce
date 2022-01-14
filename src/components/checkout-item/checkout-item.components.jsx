import React from 'react'
import { connect } from 'react-redux'
import { addItem, decrementItemCount, removeItem } from '../../redux/cart/cart.actions'

import "./checkout-item.styles.scss"
import { CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer } from './checkout-item.styles'
const CheckoutItem = ({ cartItem, removeItem, decrementItemCount, addItem }) => {
    const { name, imageUrl, price, quantity} = cartItem;
    
    return (
        <CheckoutItemContainer>
            <ImageContainer className='image-container'>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={()=> decrementItemCount(cartItem)}>&#10094;</div> 
                    <span> {quantity} </span> 
                <div onClick={()=>addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer >${price}</TextContainer>
            <RemoveButtonContainer onClick={()=> removeItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem : item => dispatch(removeItem(item)),
    decrementItemCount : item => dispatch(decrementItemCount(item)),
    addItem : item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);