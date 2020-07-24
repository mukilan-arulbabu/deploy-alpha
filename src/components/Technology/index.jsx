import React from 'react';
import { Typography, Grid, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { FileCopy, HowToReg, BlurOn } from '@material-ui/icons';
import Footer from "../Footer";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '95%',
        alignItems: 'center',
        background: '#f0f8ff96'
        // padding: '0 50px'
    },
    techHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '140px',
        backgroundImage: 'url(/imgs/the-Coronavirus.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'white',
        position: 'relative',
    },
    content: {
        fontWeight: '400',
        fontSize: '16px',
        textAlign: 'justify'
    },
    zInx: {
        zIndex: 1,
    },
    white: {
        fontSize: '28px',
        fontWeight: 600,
        // fontFamily: "initial",
    },
    papers: {
        padding: '10px 20px'
    },
    paperContainer: {
        display: 'flex',
        width: '95%',
        background: '#f0f8ff96'
    },
    paperContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    },
    paperTextContent: {
        padding: '0 15px',
        textAlign: 'center'
    }
}));

const Technology = () => {
    const history = useHistory();
    const classes = useStyles();
    return (
        <>
        <Grid container style={{ justifyContent: "center" }}>
            <Grid item xs={12}>
                <div className={classes.techHeader}>
                    <div className="background-overlay" />
                    <Typography variant="h3" gutterBottom className={classes.zInx}>
                        TECHNOLOGY
                    </Typography>
                </div>

            </Grid>
            <div className={classes.root}>
                <Grid item xs={12} className="textCenter">
                    <Typography variant="h3" gutterBottom className={classes.white}>
                        How do Our UV light solutions kill germs including Sars-Cov-2?
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} className="textCenter">
                    <img src="/imgs/dna.png" alt="dna" />
                    <Typography variant="body2" gutterBottom className={classes.content}>
                    The ultraviolet energy triggers the formation of specific thymine or cytosine dimers in DNA and uracil dimers in RNA, which causes inactivation of microbes by causing mutations and/or cell death and failure to reproduce. UV light has years of research in clinical settings proving its efficacy and safety for eliminating some of the most challenging pathogens in our everyday environments including Novel coronavirus, MRSA, Norovirus, bacteria, and other harmful germs etc. Infection control experts agree that UV is a crucial tool in the battle to reduce Healthcare Associated Infections (HAI’s). A direct approach to limit airborne viral transmissions is to inactivate them within a short time of their production, Alpha Biotech uses a powerful germicidal UV-C, typically at 254 nm to optimize their germ-killing efficiency.
                    </Typography>
                    <Typography variant="body2" gutterBottom className={classes.content}>
                    Global Research - The University’s National Emerging Infectious Diseases Laboratories (NEIDL) exposed materials containing the virus to a UV-C tube lamp. It found that a dose of 5 mJ/cm2 resulted in “a reduction of the SARS-CoV-2 virus of 99% in 6 seconds. The NEIDL team extrapolated that a stronger dose of 22mJ/cm2 would result in a reduction of 99.9999% in just 25 seconds.
                    </Typography>
                    <Typography variant="body2" gutterBottom className={classes.content}>
                    <b>Alphabiotech’s Approach:</b> We’ve packed an innovative, UV-C light with Advanced Fortified Technology (AFT) into solutions to disinfect Anything, Any Room, Any Time. Our design allows significant UV energy transmission, without the fogging, cracking or discoloration that occurs over time with non-UV transmissive lens materials. This powerful, groundbreaking design has high intensity, broad-spectrum UV, enabling us to offer a fixture small and lightweight enough to mount in a ceiling or wall, and making it more affordable and manoeuvrable on our mobile units.
                    </Typography>
                </Grid>
            </div>
            <Grid item xs={12} sm={4}>
                <div className={classes.papers}>
                    <Paper elevation={3} className={classes.paperContent}>
                        <FileCopy style={{ fontSize: 40 }} />
                        <Typography variant="h4" gutterBottom>
                            Clinical Summary
                        </Typography>
                        <Typography variant="body2" gutterBottom className={classes.paperTextContent}>
                            Clinical lab testing showed that our fixtures kill up to 99.9% of MRSA, E. coli, Salmonella, and Norovirus at distances as far away as 3 meters.
                        </Typography>
                        <Button variant="contained" color="secondary"  onClick={() => history.push('/ContactUs')}>
                            CONTACT US
                        </Button>
                    </Paper>
                </div>

            </Grid>
            <Grid item xs={12} sm={4}>
                <div className={classes.papers}>
                    <Paper elevation={3} className={classes.paperContent}>
                        <HowToReg style={{ fontSize: 40 }} />
                        <Typography variant="h4" gutterBottom>
                            Partner With Us
                        </Typography>
                        <Typography variant="body2" gutterBottom className={classes.paperTextContent}>
                            Interested in partnering with AlphaBiotech? We are always looking to build long term industry relationships that help facilities lower their risk of potential infections.
                        </Typography>
                        <Button variant="contained" color="secondary" onClick={() => history.push('/ContactUs')}>
                            CONTACT US
                        </Button>
                    </Paper>
                </div>
            </Grid>
            <Grid item xs={12} sm={4}>
                <div className={classes.papers}>
                    <Paper elevation={3} className={classes.paperContent}>
                        <BlurOn style={{ fontSize: 40 }} />
                        <Typography variant="h4" gutterBottom>
                            Demo
                        </Typography>
                        <Typography variant="body2" gutterBottom className={classes.paperTextContent}>
                        Interested in an on site Demo or our No-Risk trial program? Contact your local AlphaBiotech representative to schedule a meeting.
                        </Typography>
                        <Button variant="contained" color="secondary" onClick={() => history.push('/ContactUs')}>
                            CONTACT US
                        </Button>
                    </Paper>
                </div>
            </Grid>
        </Grid>
        <Footer />
        </>
    )
}

export default Technology;