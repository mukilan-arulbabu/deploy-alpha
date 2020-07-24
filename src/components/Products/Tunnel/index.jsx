import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Zoom } from 'react-awesome-reveal';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        fontWeight: '400',
    },
    img: {
        width: '100%',
        height: 'auto',
    },
    paperContainer: {
        borderRadius: '8px',
        background: '#f0f8ff96',
        width: '95%',
        alignItems: 'center',
        padding: '15px',
    },
    paperRoot: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    indentPoints: {
        marginLeft: '20px'
    },
    buyNow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        minHeight: '50px',
        width: '100%',
        background: '#cccccc61'
    }
});

const SecondPage = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.root}>
            <Grid container className={`${classes.paperContainer}`}>
                <Grid item xs={12} sm={6} className="z-fade">
                <Zoom>
                    <div className="paper-container-media">
                        <Typography variant="h6" gutterBottom className={classes.white}>
                            <u>Alpha Tunnel</u>
                        </Typography>
                        <Typography variant="body2" gutterBottom className={classes.content}>
                        This can be used in sectors like Pharmaceutical, Dairy, Fresh produce, Food packaging, Horticulture, Airports etc., 
                        Machine is equipped with UV-C disinfection zone designed to reduce microbiological contamination on the surface of food such as meat, fish, fruits, vegetables, seeds, packaging materials, pharmaceuticals etc.
                        </Typography>
                        <div className={classes.indentPoints}>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                            ► Branded six bulbs each with 36 watts of UV-C power at 254 nm wavelength for 180 degree illumination ensuring a swift kill of harmful virus and bacteria.
                            </Typography>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                            ► Solid MS construction for easy cleaning, 
                            </Typography>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                            ► Variable belt speed allows for more dosage time if required. Can be used standalone or added to your existing line.  
                            </Typography>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                            ► Easy controls and long life bulbs ensure minimal maintenance and servicing too.
                            </Typography>
                        </div>
                    </div>
                    </Zoom>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={"containerBuyNow"}>
                        <img src="/imgs/new_prod2.jpg" alt="machine" className={classes.img} />
                        <div className={classes.buyNow}>
                            <Button variant="contained" color="secondary" onClick={() => history.push('/ContactUs')}>
                                Enquire Now
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default SecondPage;