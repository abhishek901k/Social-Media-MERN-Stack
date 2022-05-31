import React from "react";
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>Abhi Media</h1>
                    <h6>My idea My idea My ideaMy ideaMy idea</h6>
                </div>
            </div>
        </div>
    )
}

export default Auth