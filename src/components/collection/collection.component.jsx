import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../collection-item/collection-item.componet'
import "./collection.styles.scss"

const CollectionPage = ({ match, collection }) => {
    //console.log(match.params.collectionId)
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{ title }</h2>
            <div className='items'>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
            </div>
        </div>
    )
}

//important 
const mapStateToProps = ( state,ownProps ) =>({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);