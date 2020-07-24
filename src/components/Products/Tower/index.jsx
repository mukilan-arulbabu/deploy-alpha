import React from 'react';
import { Typography, Grid, Button, Dialog, DialogTitle,
    DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
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
        color: 'black',
    },
    rs: {
        color: 'black',
        fontSize: '1rem',
        '@media (min-width:600px)': {
          fontSize: '1.5rem',
        },
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
        bottom: 0,
        color: 'white',
        minHeight: '50px',
        width: '100%',
        background: '#cccccc61'
    }
});

const SecondPage = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <Grid container className={`${classes.paperContainer}`}>
                <Grid item xs={12} sm={6} className="z-fade">
                <Zoom>
                    <div className="paper-container-media">
                        <Typography variant="h6" gutterBottom className={classes.white}>
                            <u>Alpha Tower</u>
                        </Typography>
                        <Typography variant="body2" gutterBottom className={classes.content}>
                        An average disinfection cycle with Alpha tower is 10–20 minutes (depending on the size of the room). Time-saving of over 2 hours is achieved compared to other contactless disinfection technologies, while Alpha Tower comes with Advanced Fortified Technology (AFT) to ensure no humans are harmed with the UV-C rays and does not require supervision during operation.
                        </Typography>
                        <div className={classes.indentPoints}>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                            ► Movable and on-wheels.
                            </Typography>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                            ► Easy remote control operation with timer settings.
                            </Typography>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                            ► 360 degree illumination
                            </Typography>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                            ► Advanced Fortified Technology (AFT) with motion sensors. The system switches off on accidental opening of room or if there is a human intervention
                            </Typography>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                            ► European Standard four UV-C Germicidal bulbs each with 25 watts power at 254 nm wavelength.
                            </Typography>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                            ► LED operation indicators and Stainless steel protective cage.
                            </Typography>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                            ► Start delay of 10 seconds.
                            </Typography>
                        </div>
                        <a href="/imgs/Tower_Spec.pdf" download>
                            <Button variant="contained" color="secondary">
                                Download Spec
                            </Button>
                        </a>
                    </div>
                    </Zoom>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={"containerBuyNow"}>
                        <img src="/imgs/new_prod3.jpg" alt="machine" className={classes.img} />
                        <div className={classes.buyNow}>
                            <Typography variant="h4" style={{ paddingRight: '10px' }} className={classes.rs}>
                                ₹19,500/-
                            </Typography>
                            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Attention!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    <Typography variant="body2" gutterBottom className={classes.content}>
                        Online orders are here soon!
                    </Typography>
                    <Typography variant="body2" gutterBottom className={classes.content}>
                    <b>Still you can get it delivered at your doorstep</b>
                    </Typography>
                    <Typography variant="body2" gutterBottom className={classes.content}>
                    Just place your orders over call/whatsapp to <b>(+91) 9176348700</b> and get delivered at your doorstep.
                    </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default SecondPage;