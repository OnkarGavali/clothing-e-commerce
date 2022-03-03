import React from 'react'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utlis'
import { connect } from 'react-redux'

import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer } from './header.styles'

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            
            <LogoContainer to='/' >
                <Logo className='logo'/>
            </LogoContainer>

            <OptionsContainer>
                <OptionLink  to='/shop'>SHOP</OptionLink>
                <OptionLink  to='/shop'>CONTACT</OptionLink>

                {/* another option is to use only one component as send child tag as prop  under as=<tag or component> and because of this we font need to create 2 differnt components 
                <OptionDiv as={Link} to='shop'>CONTACT</OptionDiv> */}
                { currentUser ?
                    (
                        <OptionDiv   onClick={()=> auth.signOut()}>SIGN OUT</OptionDiv>
                        //<OptionLink as='div'  onClick={()=> auth.signOut()}>SIGN OUT</OptionLink>
                    ):
                    (
                        <OptionLink  to='/signIn'>SIGN IN</OptionLink>
                    )
                }
                <CartIcon />
            </OptionsContainer>

            {
                hidden ? null : (<CartDropdown/>)
            }
            
        </HeaderContainer>
    )
}

// here createStructuredSelector take highest store stae as default parameter here is state so dont have to mention state here
const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})


export default connect(mapStateToProps)(Header);