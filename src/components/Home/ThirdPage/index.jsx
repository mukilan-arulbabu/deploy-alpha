import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Jello } from 'react-awesome-reveal';
import { Image } from 'react-bootstrap';
// import { Image  } from 'react-bootstrap';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        // padding: '0 30px',
    },
    paperContainer: {
        borderRadius: '8px',
        background: '#f0f8ff96',
        width: '95%',
        alignItems: 'center',
        padding: '10px 0px'
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
    white: {
        fontSize: "25px",
        fontWeight: "600"
        // fontFamily: "initial",
    }
});

const ThirdPage = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.root}>
            <Grid container className={classes.paperContainer}>

                <Grid item xs={12} sm={6} className="textCenter">
                    <Image src="/imgs/hT.png" fluid />
                    {/* <img src="/imgs/b2.png" alt="machine" className={classes.img} /> */}
                </Grid>
                <Grid item xs={12} sm={6} className="textCenter z-fade">
                <Jello>
                        <Typography variant="h5" gutterBottom className={classes.white}>
                            Disinfect with Alpha's Portable devices
                        </Typography>
                        <Typography variant="body1" gutterBottom className={classes.content}>
                            Using our range of products with high intensity full spectrum UV has enabled us to deliver mobile
                            versions of our product at price points that make sense. Alpha Mobile series designed for
                            disinfecting office belonging, personal and household items like mobile phones, laptops,
                            tablets, warehouses, industries, hospitals, hotels, offices ,Pharmaceutical, Dairy, Fresh produce,
                            Food packaging,less than 60secs.
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

export default ThirdPage;