import React from 'react'
import { FormInputContainer, FormInputLabel, GrpupContainer } from './form-input.styles'

import './form-input.styles.scss'

export const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <GrpupContainer >
            <FormInputContainer onChange={handleChange} {...otherProps}/>
            {
                label?
                (
                    <FormInputLabel className={`${otherProps.value.length ? 'shrink': ''} form-input-label`}>{label}</FormInputLabel>
                ):null
            }
            
        </GrpupContainer>
    )
}
