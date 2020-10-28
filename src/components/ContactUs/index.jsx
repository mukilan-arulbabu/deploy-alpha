import React from 'react';
import { Typography, Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Jello } from 'react-awesome-reveal';
import { Phone, ContactMail } from '@material-ui/icons';
import { Image } from 'react-bootstrap';
import Alpha from '../../imgs/alpha.png';

const useStyles = makeStyles(() => ({
    root: {
        textAlign: 'center',
        background: '#f0f8ff96',
        margin: '10px 0',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    whiteMin: {
        fontSize: '17px',
        fontWeight: 400,
    },
    white: {
        fontSize: '25px',
        fontWeight: 600,
    },
    footLogo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '150px'
    }
}));

const Contact = () => {
    const classes = useStyles();
    return (
        <div>
            <div id="cont-us" className="techHeader">
                <div className="background-overlay" />
                <Jello>
                    <Typography variant="h3" gutterBottom className={classes.zInx}>
                        CONTACT US
                    </Typography>
                </Jello>
            </div>
            <Grid container style={{ minHeight: '340px' }} className={classes.root}>
                <Grid item xs={12} sm={12} className={classes.container}>
                    <Typography variant="h5" gutterBottom className={classes.white}>
                        We&#39;d love to hear from you
                    </Typography>
                    <Typography variant="h6" gutterBottom className={classes.whiteMin}>
                        We’re here to help and answer any question you might have.
                    </Typography>
                    <Typography variant="h6" gutterBottom className={classes.whiteMin}>
                        Please reach us at <ContactMail /> sales@alphabiotech.in / <Phone /> (+91) 9176348700/9884370900
                    </Typography>
                    <Typography variant="h6" gutterBottom className={classes.whiteMin}>
                        #22, 1stCross Street, 3rd Avenue, Ashok Nagar, Chennai - 600083
                    </Typography>
                </Grid>
            </Grid>
            <Hidden smUp>
                <div className={classes.footLogo}>
                    <Image src={Alpha} fluid />
                </div>
            </Hidden>
        </div>
    )
}

export default Contact;