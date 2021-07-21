import React from 'react'
import logo from '../assets/logo.png';
import Button from '@material-ui/core/Button';


function Topbar() {
    return (
        <div className="topbar">
            <img className="logo" src={logo} />
            <div className="sub-topbar">
                <button className="styled-button">Benefits</button>
                <button className="styled-button">Features</button>
                <button className="styled-button">Partners</button>
                <button className="styled-button">Learn more</button>
                <button className="styled-button">Register interest</button>
                <Button variant="contained" color="primary">Log in</Button>
            </div>
        </div>
    )
}

export default Topbar

