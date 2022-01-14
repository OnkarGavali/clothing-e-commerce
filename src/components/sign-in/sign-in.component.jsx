import React, { Component } from 'react'
import { CustomButton } from '../custom-buttom/custom-button.component';
import { FormInput } from '../form-input/form-input.component';


import './sign-in.styles.scss'

import { auth, signInWithGoogle } from '../../firebase/firebase.utlis';
import { SignInTitle, SignInContainer, ButtonsBarContainer } from './sign-in.styles';

export default class SignIn extends Component {
       
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit = async event =>{
        event.preventDefault();
        
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword( email, password )
            this.setState({ email:'', password:''})
        } catch (error) {
            console.log(error)
        }

    }
    handleChange= event =>{
        const {value,name} = event.target;
        this.setState({[name]:value})
    }

    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='Email'/>
                   
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='Password' required/>
                   
                    <ButtonsBarContainer>
                        <CustomButton type='submit' >SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </ButtonsBarContainer>
                    
                </form>

            </SignInContainer>
        )
    }
}
