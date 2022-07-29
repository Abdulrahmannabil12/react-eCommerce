import React from 'react'
import SignInComponent from '../../components/sign-in/sign-in.component'
import SignUpComponent from '../../components/sign-up/sign-up.component'
import './sign-in-sign-up.styles.scss'
export default function SignInSignUpComponent() {
  return (
    <div className='sign-in-and-sign-up '>
      <SignInComponent />
      <SignUpComponent />
    </div>
  )
}

