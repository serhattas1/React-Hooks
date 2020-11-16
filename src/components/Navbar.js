import React from "react";
import {Link} from "react-router-dom";

const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <button className='btn btn-link nav-item nav-link active'><Link to="/">Home</Link></button>
                    <button className='btn btn-link nav-item nav-link'><Link to="/about">About</Link></button>
                    <button className='btn btn-link nav-item nav-link'><Link to="/contact">Contact</Link></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;