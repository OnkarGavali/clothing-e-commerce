import React from 'react'
import { withRouter } from 'react-router-dom'
import CollectionItem from '../collection-item/collection-item.componet'
import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './collection-preview.styles'

import './collection-preview.styles.scss'


const CollectionPreview = ({ title, items, history, match, routeName }) => {
    return (
        <CollectionPreviewContainer>
            <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
            <PreviewContainer>
                {
                    items
                    .filter((item,idx)=>idx<4)
                    .map((item)=>(
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}
export default withRouter(CollectionPreview);
