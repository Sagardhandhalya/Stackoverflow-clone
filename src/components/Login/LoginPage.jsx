import React from 'react'
import LoginForm from './LoginForm'
import './login.css'
import ThirdPartyLoginButton from './ThirdPartyLoginButton'
import { Link } from 'react-router-dom'
function LoginPage() {
    return (
        <div className="main">
        <div className="login-container">
            <img src="https://www.vectorlogo.zone/logos/stackoverflow/stackoverflow-tile.svg" alt="logo" width="25px" height="25px"/>
           <ThirdPartyLoginButton text = "Login in with Google" bgcolor="white" icon="https://img-authors.flaticon.com/google.jpg" color="black"/>
           <ThirdPartyLoginButton text = "Login in with Github" bgcolor="#24272A" icon="https://www.sferalabs.cc/wp-content/uploads/github-logo-white.png" color="white"/>
           <ThirdPartyLoginButton text = "Login in with Facebok" bgcolor="#385499" icon="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" color="white"/>
            <LoginForm/>
            <div>Do not have account ? <Link to="/signup">Sign Up</Link></div>
        </div>
        </div>
    )
}

export default LoginPage
