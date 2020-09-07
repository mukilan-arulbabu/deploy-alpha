import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Bounce, Flip } from 'react-awesome-reveal';

const useStyles = makeStyles({
    papers: {
        width: '95%',
        height: '80%',
        background: '#f0f8ff96',
        alignItems: 'center',
        borderRadius: '8px'
        // fontSize: '2.5rem',
        // '@media (min-width:600px)': {
        //   fontSize: '3rem',
        // },
    },
    bar: {
        display: 'flex',
    },
    tile: {
        width: '5px',
        flexShrink: 0,
        background: '#f44336',
        marginRight: '5px'
    },
    head: {
        fontSize: '25px',
        fontWeight: 600,
        textAlign: 'center',
    },
    header: {
        fontSize: '14px',
    },
    body: {
        fontSize: '12px',
    },
    paper: {
        padding: '10px',
    },
    prodElements: {
        position: 'absolute',
        textAlign: 'center',
    }
});

const AboutUs = () => {
    const classes = useStyles();
    return (
        // <section style={{width: '100%', justifyContent: 'center', display: 'flex' }}>
            <Grid container style={{ justifyContent: "center" }} className={classes.papers}>
                <Grid item xs={12} sm={12} className={classes.paper}>
                    <Bounce>
                        <Typography variant="h5" gutterBottom className={classes.head} >
                            <b>Why Alpha Biotech?</b>
                        </Typography>
                    </Bounce>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.paper}>
                    <Flip direction={"horizontal"} delay={100} triggerOnce>
                        <div className={classes.bar} >
                            <div className={classes.tile} />
                            <div>
                                <Typography variant="h6" gutterBottom className={classes.header} >
                                    <b>Highly Qualified Research Team</b>
                                </Typography>
                                <Typography variant="body2" gutterBottom className={classes.body} >
                                    <b>Dr.Renuka Kandayapillai</b>, Senior Research fellow, University of Washington – drives our team efficiently by committing to provide organizational excellence.
                                </Typography>
                            </div>
                        </div>
                    </Flip>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.paper}>
                    <Flip direction={"horizontal"} delay={300} triggerOnce>
                    <div className={classes.bar} >
                            <div className={classes.tile} />
                            <div>
                        <Typography variant="h6" gutterBottom className={classes.header} >
                            <b>Quick Response</b>
                    </Typography>
                        <Typography variant="body2" gutterBottom className={classes.body} >
                            You don’t need to wait anymore to hear back from us. Our support team will assist you immediately.
                    </Typography>
                            </div>
                        </div>
                    </Flip>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.paper}>
                    <Flip direction={"horizontal"} delay={100} triggerOnce>
                        <div className={classes.bar} >
                            <div className={classes.tile} />
                            <div>
                                <Typography variant="h6" gutterBottom className={classes.header} >
                                    <b>Advanced Technology</b>
                                </Typography>
                                <Typography variant="body2" gutterBottom className={classes.body} >
                                    We’ve packed an innovative, UV-C light with Advanced Fortified Technology (AFT) into solutions to disinfect Anything, Any Room, Any Time. We are the only service provider in the city with the ability to provide whole room coverage of full spectrum UV with proper layout with Fixtures in the ceiling or on the wall with automated human detection.
                                </Typography>
                            </div>
                        </div>
                    </Flip>
                </Grid>
               
                <Grid item xs={12} sm={6} className={classes.paper}>

                    <Flip direction={"horizontal"} delay={300} triggerOnce>
                    <div className={classes.bar} >
                            <div className={classes.tile} />
                            <div>
                        <Typography variant="h6" gutterBottom className={classes.header} >
                            <b>End to End Solution with Design Centre</b>
                    </Typography>
                        <Typography variant="body2" gutterBottom className={classes.body} >
                            We do site surveys and provide complete solutions with proper layout depending on building requirements for corporate and big facilities.
                    </Typography>
                            </div>
                        </div>
                    </Flip>

                </Grid>
                <Grid item xs={12} sm={6} className={classes.paper}>
                    <Flip direction={"horizontal"} delay={500} triggerOnce>
                    <div className={classes.bar} >
                            <div className={classes.tile} />
                            <div>
                        <Typography variant="h6" gutterBottom className={classes.header} >
                            <b>State of Art Manufacturing facility</b>
                    </Typography>
                        <Typography variant="body2" gutterBottom className={classes.body} >
                            We do not outsource. Manufactured wholly in-house with our state of art production unit facility.
                    </Typography>
                            </div>
                        </div>
                    </Flip>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.paper}>
                    <Flip direction={"horizontal"} delay={500} triggerOnce>
                    <div className={classes.bar} >
                            <div className={classes.tile} />
                            <div>
                        <Typography variant="h6" gutterBottom className={classes.header} >
                            <b>Made in India - Proud Indeed !</b>
                        </Typography>
                            </div>
                        </div>
                    </Flip>
                </Grid>

            </Grid>
        // </section>

    )
}

export default AboutUs;
