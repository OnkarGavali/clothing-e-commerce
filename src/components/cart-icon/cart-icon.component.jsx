import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import './cart-icon.styles.scss'
//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { CartIconContainer,ItemCountContainer,ShoppingIcon } from './cart-icon.styles'

const CartIcon = ({ toggleCartHidden,itemCount }) => {
    return (
        <CartIconContainer onClick = {toggleCartHidden}>
            <ShoppingIcon/>
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartIconContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect( mapStateToProps, mapDispatchToProps)( CartIcon );
