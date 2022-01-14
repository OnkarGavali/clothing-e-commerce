import React from 'react'
import { CustomButton } from '../custom-buttom/custom-button.component'
import { connect } from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions'
import './collection-item.styles.scss'
import { AddButton, BackgroundImage, CollectionFooterContainer, CollectionItemConatiner, NameContainer, PriceContainer } from './collection-item.styles'
const CollectionItem = ({item, addItem}) => {
    const {  name, price, imageUrl} = item;
    return (
        <CollectionItemConatiner >
            <BackgroundImage imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={()=>addItem(item)} inverted> Add to cart</AddButton>
        </CollectionItemConatiner>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

export default connect( null, mapDispatchToProps )( CollectionItem );
