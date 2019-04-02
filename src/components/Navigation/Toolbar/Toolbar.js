import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationList from "../NavigationList/NavigationList";

const Toolbar = () => {
    return (
        <header className="Toolbar">
            <Logo/>
            <NavigationList/>
        </header>
    );
};

export default Toolbar;

