import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.componet'
import "./collection.styles.scss"
import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from './collection.styles'

const CollectionPage = ({ match, collection }) => {
    //console.log(match.params.collectionId)
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{ title }</CollectionTitle>
            <CollectionItemsContainer>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

//important 
const mapStateToProps = ( state,ownProps ) =>({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);