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
                {/* <Grid item xs={12} sm={12}>
                        <img src="/imgs/pic8.png" alt="machine" className={classes.img} />
                    
                </Grid> */}
                <Grid item xs={12} sm={6} className="z-fade">
                {/* <img src="/imgs/pic8.png" alt="machine" className={classes.img} /> */}
                    <Zoom>
                        <div className="paper-container-media">
                            <Typography variant="h6" gutterBottom className={classes.white}>
                                <u>Advanced Air Purification System</u>
                            </Typography>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                                The Advanced Air purification system is installation of alpha fixtures in duct system. Generally inject a volume of virus free exterior air inside the building equivalent to 1−1.5 times the building volume per hour; such fresh air is mixed with 1−2 times its share of recycled air disinfecting the latter can thus bring the rate of clean-air replacement to 2−4.5 times per hour at the cost of cleaning a volume of air per hour equal to 1−3 times the building volume and also effectively kill the harmful bacteria and viruses 99.99%
                            </Typography>
                            <img src="/imgs/pic8.png" alt="machine" className={classes.img} />
                        </div>
                    </Zoom>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={"containerBuyNow"}>
                        <img src="/imgs/new_prod6.jpg" alt="machine" className={classes.img} />
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