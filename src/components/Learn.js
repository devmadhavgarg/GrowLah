import React from 'react'
import Button from '@material-ui/core/Button';
import corporates from '../assets/corporates.png';
import schools from '../assets/school.png';
import communities from '../assets/communities.png'
var corporates_text = "Growlah offers an enriching opportunity for corporate engagement and bonding activities through the use of urban hydroponics or aeroponics which can be catered to outdoor roof gardens or indoor units as well. GrowLah promises a refreshing take on bonding offering a rewarding program for contribution to sustainability at the workplace.";
var schools_text = "We believe that food security and sustainability should be taught at a young age. This is why GrowLah combines digital learning with active citizenship and urban farmin to create a platform for students to not only become sustainable but also learn digital literacy in the process           Out specialized packages offer in depth tutorials for students to achieve their learning objectives, regardless of their learning level.";
var communities_text = "Communities are essential to a bountiful harvest and GrowLah offers a digital platform to connect people via the medium of urban farming. Whether it be in the form of a community center, public park or even condominium or apartment communities, GrowLah can fit any size or audience requirement to make farming a fun and rewarding experience";

function Learncontent(props) {

    return (
        <div className="learn-content">
            <img className="learn-image" src={props.client_image} />
            <p className="learn-text">{props.client_text}</p>
        </div>

    );
}

function Learn() {
    return (
        <div className="learn-container">
            <h2>Learn more</h2>
            <div className="button-container">
                <Button color="primary" className="learn-button" variant="contained">For schools</Button>
                <Button color="primary" className="learn-button" variant="contained" >For corporates</Button>
                <Button color="primary" className="learn-button" variant="contained" >For communities</Button>
            </div>
            <Learncontent client_image={schools} client_text={schools_text} />
        </div>
    )
}

export default Learn
