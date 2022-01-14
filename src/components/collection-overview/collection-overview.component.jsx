import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionForPreview, selectCollections } from '../../redux/shop/shop.selectors'
import { CollectionPreview } from '../collection-preview/collection-preview.component'
import { CollectionsOverviewContainer } from './collection-overview.styles'

import './collection-overview.styles.scss'

const CollectionOverview = ({ collections}) => {
    return (
        <CollectionsOverviewContainer>
        {
            collections.map(({id, ...otherCollectionProps}) =>
                <CollectionPreview key={id} {...otherCollectionProps}/>
                )
        }
        </CollectionsOverviewContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);