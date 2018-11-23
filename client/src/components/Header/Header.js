import { Logo, HeaderStyle } from './HeaderStyles';
import React from 'react';

const Header = () => (
    <HeaderStyle>
        <div className="bar">
            <Logo>
                <a href="/">Whiteboard</a>
            </Logo>
        </div>
    </HeaderStyle>
)

export default Header;