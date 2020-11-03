import React, { useState } from 'react';

import './sign-in.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


const SignIn = () => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     email: '',
  //     password: ''
  //   };
  // }

  const [ userCredentials, setCredentials ] = useState({ email: '', password: '' })

  const { email, password } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      auth.signInWithEmailAndPassword(email, password)
      // this.setState({ email: '', password: '' })
      setCredentials({ email: '', password: '' })
    } catch(error) {
      console.log(error)
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;

    // this.setState({ [name]: value });
    setCredentials({...userCredentials, [name]: value })
  };

  

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton 
            type='button'
            onClick={signInWithGoogle} 
            isGoogleSignIn
          > Sign In With Google </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;