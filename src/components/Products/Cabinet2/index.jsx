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

const FourthPage = () => {
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
                            <b><u>Alpha Cabinet 2.0</u></b>
                        </Typography>
                        <Typography variant="body2" gutterBottom className={classes.content}>
                            The UV sterilization cabinet is an automated disinfectant chamber designed for disinfecting office belongings, personal and household items like mobile phones, laptops, tablets, purse, currency, covers of office files, etc less than 60secs.
                        </Typography>
                        <div className={classes.indentPoints}>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                            ► Compact, durable and solid MS cabinet (2’ x 2’).
                            </Typography>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                            ► European Standard UV-C 66W bulb 
                            </Typography>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                            ► High UV-C radiance at 254nm
                            </Typography>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                            ► High quality reflector to distribute UV-C light in all directions
                            </Typography>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                            ► High-precision Auto cut-off settings
                            </Typography>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                            ► Automatically lights get off if door is opened during sterilization.
                            </Typography>
                        </div>
                        <a href="/imgs/Cabinet_Series_SpecFinal.pdf" download>
                            <Button variant="contained" color="secondary">
                                Download Spec
                            </Button>
                        </a>
                    </div>
                    </Zoom>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={"containerBuyNow"}>
                        <img src="/imgs/new_prod4.jpg" alt="machine" className={classes.img} />
                        <div className={classes.buyNow}>
                            <Typography variant="h4" style={{ paddingRight: '10px' }} className={classes.rs}>
                                ₹15,500/-
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

export default FourthPage;