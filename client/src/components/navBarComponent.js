import React from 'react';
import {Link} from 'react-router-dom';

export default function navBarComponent() {
    return (
        <div className="navBar">
            <div className="navHead">
                The Accountant
            </div>
            <div className="navLinks">
            <Link to='/viewrcrds'>View Records</Link>
            <Link to='/addrcrds'>Add Records</Link>
            </div>
            
        </div>
    )
}
