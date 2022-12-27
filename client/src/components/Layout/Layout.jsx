import React from 'react';
import Nav from '../Nav/Nav';

const Layout = ({ children }) => (
    <div>
        <Nav />
        <div>{children}</div>
        {/* footer here */}
    </div>
)

export default Layout;
