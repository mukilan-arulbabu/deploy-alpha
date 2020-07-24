import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Jello } from 'react-awesome-reveal';
// import { Image  } from 'react-bootstrap';

const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        // padding: '0 30px',
    },
    buttonRoot: {
        position: 'absolute',
        bottom: theme.spacing(5),
        right: theme.spacing(5),
      },
    textCenter: {
        textAlign: 'center',
        padding: '0 20px'
    },
    content: {
        fontWeight: '400',
    },
    img: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px'
    },
    paperContainer: {
        borderRadius: '8px',
        background: '#f0f8ff96',
        width: '95%',
        alignItems: 'center',
        padding: '10px 0px'
    },
    white: {
        fontSize: "25px",
        fontWeight: "600"
        // fontFamily: "initial",
    },
    customFont: {
        fontSize: '2.5rem',
        '@media (min-width:600px)': {
          fontSize: '3rem',
        },
    }
}));

const SecondPage = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.root}>
            <Grid container className={classes.paperContainer}>
                {/* <Grid item xs={12} className="textCenter z-fade">
                    <Jello>
                        <Typography variant="h3" gutterBottom className={classes.customFont}>
                            Our Solutions
                        </Typography>
                    </Jello>

                </Grid> */}
                <Grid item xs={12} sm={6} className="textCenter">
                    {/* <Image src="/imgs/cafeteria.png" thumbnail /> */}
                    <img src="/imgs/new_prod1.jpg" alt="cafeteria" className={classes.img} />
                </Grid>
                <Grid item xs={12} sm={6} className="textCenter z-fade">
                    <Jello>
                        <Typography variant="h5" gutterBottom className={classes.white}>
                            Disinfection by Alpha's Advanced Fortified Technology (AFT) Fixtures
                        </Typography>
                        <Typography variant="body1" gutterBottom className={classes.content}>
                            We have the ability to provide whole room coverage of full spectrum UV with proper layout with
                            Fixtures in the ceiling or on the wall with automated human detection. Disinfect an entire room with
                            the flip of a switch. We do site survey and provide solutions depend on building requirement.
                        </Typography>
                        <Button variant="contained" color="secondary" onClick={() => history.push('/Products')}>
                            Learn More
                        </Button>
                    </Jello>
                </Grid>
            </Grid>
        </div>
    )
}

export default SecondPage;