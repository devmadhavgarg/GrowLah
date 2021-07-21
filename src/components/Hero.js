import React from 'react'
import Button from '@material-ui/core/Button';
import Heroimage from "../assets/hero-image.png";
function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-text">
                <h1>Grow Local, Eat Local</h1>
                <h2 style={{ color: "#20A727", padding: "0" }}>Sustainably improving food security, one step at a time.</h2>
                <p className="info-large">Growlah is a digital platform that helps you build a cutting-edge hydroponics system, so that you can grow plants anywhere.</p>
                <p className="info-large">You can customize the size, specifications and seeds according to your requirements. You choose the system, and our team of senior workers will help install it!</p>
                <Button variant="contained" color="primary">Connect with us!</Button>
            </div>
            <img className="hero-image" src={Heroimage} />
        </div>
    )
}

export default Hero
