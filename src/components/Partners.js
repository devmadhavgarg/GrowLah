import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import UWC from '../assets/UWC.png';
import scs from '../assets/scs.png';
function Partners() {
    return (
        <div className="grids-pannel">
            <h2>Partners</h2>
            <p>Growlah has a trackrecord of successful projects. We installed systems at the Science Center, United World College and North Vista Primary School. </p>
            <Grid className="grid-container" container spacing={6}>
                <Grid item className="grid-item-container" sm={3} lg={3} xl={2} >
                    <Paper square className="grid-item-large">
                        <h3 style={{ color: "black" }}>United World College </h3>
                        <img className="partner-logo" src={UWC} />
                        <p>We enabled an interactive hydroponics experience involving both the children of the school, and their parents. The parents built the systems, while the children planted seeds. This is a demonstation of how hydroponcs can help educate children and bring people together</p>
                    </Paper>
                </Grid>
                <Grid item className="grid-item-container" sm={3} lg={3} xl={2}>
                    <Paper square className="grid-item-large">
                        <h3 style={{ color: "black" }}>Science center</h3>
                        <img className="partner-logo" src={scs} />
                        <p>We installed a system that grows lettuce, cabbage, and spinach at the Science center. We are ensuring optimal growth using
                            temperature, light and humidity sensors and displaying information on interactive dashboards for viewers</p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Partners
