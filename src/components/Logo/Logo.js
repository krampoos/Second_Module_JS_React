import React from 'react';
import logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";


const Logo = () => {
    return (
        <div className="Logo">
            <NavLink to={'/'} exact>
                <img src={logo} alt="my logo"/>

            </NavLink>
        </div>
    );
};

export default Logo;

