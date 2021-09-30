import React from 'react'
import './collection-preview.styles.scss'


export const CollectionPreview = ({title,items}) => {
    return (
        <div classname='collection-preview'>
            <h1 classname='title'>{title.toUpperCase()}</h1>
            <div classname='preview'>
                {
                    items
                    .filter((item,idx)=>idx<4)
                    .map(item=>(
                        <div key={item.id}>{item.name}</div>
                    ))
                }
            </div>
        </div>
    )
}
