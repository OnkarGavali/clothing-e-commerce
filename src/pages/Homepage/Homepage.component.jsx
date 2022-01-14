import React from 'react'

//import './homepage.styles.scss'
import { HomepageContainer } from './homepage.styles'
import Directory from '../../components/directory/Directory.component'

export const Homepage = () => {
    return (
        <HomepageContainer>
            <Directory />
        </HomepageContainer>
    )
}
