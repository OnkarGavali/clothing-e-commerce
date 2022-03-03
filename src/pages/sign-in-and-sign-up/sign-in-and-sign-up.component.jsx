import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles'

import './sign-in-and-sign-up.styles.scss'

export const SignInaAndSignUp = () => {
    return (
        <SignInAndSignUpContainer>
            <SignIn/>
            <SignUp/>
        </SignInAndSignUpContainer>
    )
}
