import React from 'react';

let Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.isLoggedIn ? props.user : "Guest"}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">My Values</a>
                <a className="nav-link" href="#">About Me</a>
                <a className="nav-link" href="#">Contact</a>
            </div>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;