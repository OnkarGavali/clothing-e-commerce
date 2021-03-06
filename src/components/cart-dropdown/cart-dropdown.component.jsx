import React from 'react'
import { CustomButton } from '../custom-buttom/custom-button.component';
import { connect } from 'react-redux'
import {  CartItem } from "../cart-item/cart-item.component";
import './cart-dropdown.styles.scss'
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartDropdownContainer,CartItemsContainer,EmptyMessageContainer,CartDropdownButton } from './cart-dropdown.styles';
const CartDropdown = ({ cartItems, history, dispatch}) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? (
                        cartItems.map( cartItem => (
                            <CartItem key={cartItem.id} item ={cartItem}/>
                        ))
                    ) : (
                        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                    )
                }
            </CartItemsContainer>
            <CartDropdownButton onClick={()=> {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}> 
                GO TO CHECKOUT  
            </CartDropdownButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));