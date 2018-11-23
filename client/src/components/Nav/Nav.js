import React from 'react';
import NavStyles from './NavStyles';

// We use a functional component here because we're not relying on a backend to 
// dynamically change what is changed based on if we have a user logged in or not
const Nav = () => (
    <NavStyles>
        <>
            <a href="/About">About</a>
            <a href="/Contact">Contact</a>
        </>
    </NavStyles>
);

export default Nav;