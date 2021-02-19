import React from 'react'
import './header.css'
import {useAuth} from '../../context/auth-context'
function Header() {
    const auth = useAuth()
    return (
        <div className="header-container">
        
            <img src="https://www.kindpng.com/picc/m/19-195403_stack-overflow-logo-hd-png-download.png" alt="logo" width="100px" height="35px"/>
        <span>
                <a href="#">About</a>
                <a href="#" >Product</a>
                <a href="#">For Team</a>
             </span>
                <input type="text" name="searchtext" placeholder="Search.."/>
       { !auth.user ? <span>
           <button className="login" >Log In</button>
          <button className="signup">Sign Up</button>
          </span>

          : <span>
                <button className="signup" onClick={() => auth.logout()}>Log Out</button>
          </span>

       } 
        </div>
    )
}

export default Header
