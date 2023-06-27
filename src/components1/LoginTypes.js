import React from 'react'
import GoogleLogo from '../Files/google.png';
import AppleLogo from '../Files/apple.png';
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';


function LoginTypes() {

  const login = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
    flow: 'auth-code',
  });

  return (
    <div className='logtp'>
      <div className='type1'>
        {/* <GoogleOAuthProvider> */}
          <button onClick={() => login()}>
            <img src={GoogleLogo} alt=''></img>
            <p> Sign in with Google</p>
          </button>
        {/* </GoogleOAuthProvider> */}
      </div>
      <div className='type2'>
        <button>
          <img src={AppleLogo} alt=''></img>
          <p> Sign in with Apple</p>
        </button>
      </div>
    </div>
  )
}

export default LoginTypes
