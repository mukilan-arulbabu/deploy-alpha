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
    },
    img: {
        width: '80%',
        height: 'auto',
    },
    rs: {
        color: 'black',
        fontSize: '1rem',
        '@media (min-width:600px)': {
          fontSize: '1.5rem',
        },
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
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
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
                                <b><u>Crips Air - Advanced Air Purification System</u></b>
                            </Typography>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                                Crisp Air disinfection unit has ability to Visualize and control your air – anywhere,anytime.With a dual air flow system, has a boosted clean air delivery rate up to 250 m3/hr against allergens, harmful gases, particles, bacteria & viruses. Designed with a multi-stage active filtration system, which captures up 99.97% of particles that pass through the filter as small as 0.3 microns – the size of most common airborne allergens,like pollen,dust,pet dander and more.
                            </Typography>
                            <Typography variant="body2" gutterBottom className={classes.content}>
                                A direct approach to limit airborne viral transmissions(Includes covid- 19) is to inactivate them within a short time of their production,Alpha Biotech uses a powerful germicidal UV-C, typically at 254 nm to optimize their germ-killing efficiency. So you are assured of healthier air always.
                            </Typography>
                            <div className={classes.indentPoints}>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                    ► Multiple mounting options: Ceiling fixtures, hard lid ceilings or wall mounted
                                </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                    ► 2x15W - European Standard Germicidal UV-C bulb. High UV-C radiance at 254nm
                                </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                    ► Kills 99.99% of viruses and germs.
                                </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                    ► Room Area Coverage – 700-900 Sq.ft
                                </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                    ► Washable pre-filters – 2 Nos
                                </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                    ► Activated Carbon HEPA filter for fine filtration process
                                </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                    ► Removes 99.95% airborne pollutants such as PM2.5, pollen, dust mites, etc
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
                        <img src="/imgs/air3_png.png" alt="machine" className={classes.img} />
                        <div className={classes.buyNow}>
                            <Typography variant="h4" style={{ paddingRight: '10px' }} className={classes.rs}>
                            ₹10,800/-
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