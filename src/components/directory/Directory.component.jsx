import React, { Component } from 'react'

import './directory.styles.scss'
import MenuItem from '../menu-item/MenuItem.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySection } from '../../redux/directory/directory.selectors'


const Directory =({ section })=> {
    return (
        <div className='directory-menu'>
        {
            section.map(({id,...otherSectionProps})=>(
                <MenuItem key={id} {...otherSectionProps}/>
                
            ))
        }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    section: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);