import React from 'react'

function ThirdPartyLoginButton({icon , text , color , bgcolor}) {
    return (
        <div className="oauth-loginbtn" style={{backgroundColor : bgcolor , color: color}}> 
        <img src={icon} alt="logo" width="25px" height="25px" style={{marginRight:'10px'}}/>
        <p>{text}</p>
        </div>
    )
}

export default ThirdPartyLoginButton
