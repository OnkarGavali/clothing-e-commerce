import React from 'react'
import CollectionItem from '../collection-item/collection-item.componet'
import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './collection-preview.styles'

import './collection-preview.styles.scss'


export const CollectionPreview = ({title,items}) => {
    return (
        <CollectionPreviewContainer>
            <TitleContainer >{title.toUpperCase()}</TitleContainer>
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
