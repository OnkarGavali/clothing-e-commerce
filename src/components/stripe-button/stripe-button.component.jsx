import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K6ymoSJFXei4aiYo4nsUZgV2YZ3n7g3GlwEcHrpnWDB1nIGpAkWemA2wXuLnSsFI1Z1NaZSdFZVqb1n8xlqNijJ00RoFFqqOR';
    const onToken = token => {
        console.log(token)
        alert("Payment is succesful")
    }
    return (
        <StripeCheckout
            label = 'Pay Now'
            name = "hawa hawai Clothing"
            billingAddress
            shippingAddress
            image='https://picjumbo.com/wp-content/uploads/woman-holding-an-american-flag-in-a-field-free-photo-2210x3315.jpg'
            description={`Your total is $${price}`}
            amount = { priceForStripe }
            panelLabel='Pay Now'
            token ={onToken}
            stripeKey={publishableKey}
        />
    )
}



export  default StripeCheckoutButton;