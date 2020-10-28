import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Zoom } from 'react-awesome-reveal';
import Aft1 from '../../../imgs/aft1.png';

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
        width: '80%',
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
                                <b><u>Alpha AFT Fixtures</u></b>
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom className={classes.white}>
                                Disinfect with <i><b>“Advanced Fortified Technology (AFT)”</b></i> Fixtures
                        </Typography>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                                We have the ability to provide whole room coverage of full spectrum UV with proper layout of our Alpha Fixtures in the ceiling or on the wall. Disinfect an entire room with alpha’s <i><b>“Advanced Fortified Technology (AFT)”</b></i> enabled fixtures to ensuring no humans are harmed with the UV-C rays and with the flip of a switch take advantage of Alpha’s programming capabilities to schedule your entire facility for disinfection.
                        </Typography>
                            <div className={classes.indentPoints}>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                ► Multiple mounting options: Ceiling fixtures, hard lid ceilings or wall mounted
                                </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                ► 2x15W - European Standard Germicidal UV-C bulb. High UV-C radiance at 254nm
                                </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                ► Motion sensors programmed with AFT for automatic shut off to prevent unnecessary UV exposure.
                                </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                ► 15 minutes Auto-disinfection for every two hours
                                </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                ► Seamlessly working 24X7, with no staff intervention required
                                </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                ► High quality reflector to distribute UV-C light in all directions
                                </Typography>
                            </div>
                        </div>
                    </Zoom>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={"containerBuyNow"} style={{ textAlign: 'center' }}>
                        <img src={Aft1} alt="machine" className={classes.img} />
                        <div className={classes.buyNow}>
                            {/* <Typography variant="h4" gutterBottom className={classes.content}>
                                Rs.
                            </Typography> */}
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