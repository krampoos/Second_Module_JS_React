import React from 'react';
import {NavLink} from "react-router-dom";

const NavigationList = () => {
    return (
        <ul className="NavigationList">
            <li className="NavigationItem">
                <NavLink to="/" exact>Main</NavLink>
            </li>
            <li className="NavigationItem">
                <NavLink to="/NewsList" exact>News List</NavLink>
            </li>
        </ul>
    );
};

export default NavigationList;
