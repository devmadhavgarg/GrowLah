import React from 'react';
import hydro1 from "../assets/hydro1.png";
import hydro2 from "../assets/hydro2.png";
import dashboard from "../assets/dashboard.png";
import Grid from '@material-ui/core/Grid';


function Features() {
    return (
        <div className="features-pannel">
            <Grid container className="features-container" spacing={3}>
                <Grid item xs={12}>
                    <h2>Features</h2>
                </Grid>
                <Grid item className="features-image-container" xs={4}>
                    <img className="features-image" src={hydro1} />
                </Grid>

                <Grid item className="features-image-container" xs={4}>
                    <img className="features-image" src={hydro2} />
                </Grid>

                <Grid item className="features-image-container" xs={4}>
                    <img className="features-image" src={dashboard} />
                </Grid>

                <Grid item className="features-text-container" xs={4}>
                    <h3>Hydroponic systems</h3>
                    <p>We use a expert team of elders
                        to install customized hydroponic systems at your location </p>
                </Grid>


                <Grid item className="features-text-container" xs={4}>
                    <h3>Technology </h3>
                    <p>We have a range of IOT-enabled technologies like our web dashbaord and mobile app</p>
                </Grid>

                <Grid item className="features-text-container" xs={4}>
                    <h3>Sensors</h3>
                    <p>We install a range of IOT-enabled sensors to obtain accurate monitoring of your systems</p>
                </Grid>

            </Grid>
        </div>
    );
}

export default Features
