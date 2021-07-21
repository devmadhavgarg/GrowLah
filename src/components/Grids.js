import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function Grids() {
    return (
        <div className="grids-pannel">
            <h2>Benefits of Hydroponics</h2>
            <Grid className="grid-container" container spacing={6}>
                <Grid item className="grid-item-container" sm={7} lg={3} xl={2}>
                    <Paper square className="grid-item">
                        <h3>Saves resources</h3>
                        <p>Hydroponics uses less water than other farming methods</p>
                    </Paper>
                </Grid>
                <Grid item className="grid-item-container" sm={7} lg={3} xl={2}>
                    <Paper square className="grid-item">
                        <h3>Space saving</h3>
                        <p>Hydroponics uses far less space than other methods of farming, espescially when done vertically </p>
                    </Paper>
                </Grid>
                <Grid item className="grid-item-container" sm={7} lg={3} xl={2}>
                    <Paper square className="grid-item">
                        <h3>High yield rate</h3>
                        <p>Hydroponics allows plants to grow vast ammounts of produce </p>
                    </Paper>
                </Grid>
            </Grid>
            <h2>Benefits of Growlah</h2>
            <Grid className="grid-container" container spacing={6}>
                <Grid item className="grid-item-container" sm={1} lg={3} xl={2}>
                    <Paper square className="grid-item">
                        <h3>Support our Seniors</h3>
                        <p>Growlah provides employment and support to singapore’s elderly</p>
                    </Paper>
                </Grid>
                <Grid item className="grid-item-container" sm={7} lg={3} xl={2}>
                    <Paper square className="grid-item">
                        <h3>Highly Customizable</h3>
                        <p>Growlah allows you to customize your hydroponic system to your requirements like size.</p>
                    </Paper>
                </Grid>
                <Grid item className="grid-item-container" sm={7} lg={3} xl={2}>
                    <Paper square className="grid-item">
                        <h3>Internet Enabled</h3>
                        <p>Growlah allows you to track your system through IOT-enabled web and mobile platforms which contain a host of other features</p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Grids
