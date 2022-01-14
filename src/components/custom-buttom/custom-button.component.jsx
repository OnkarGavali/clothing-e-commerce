import React from 'react'
import { CustomButtonContainer } from './custom-button.styles'

// import './custom-button.styles.scss'
// export const CustomButton = ({children,isGoogleSignIn,inverted, ...otherProps}) => {
//     return (
//         <button className={`${inverted ? 'inverted': ''}${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
//             {children}
//         </button>
//     )
// }

export const CustomButton = ({children, ...props}) => {
    return (
        <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
    )
}

