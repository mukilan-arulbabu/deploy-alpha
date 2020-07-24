import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    white: {
        color: "white",
    fontWeight: 600,
    letterSpacing: "1px"
        // fontFamily: "initial",
    }
});

const Corosal = () => {
    const classes = useStyles();
    return (
        <Carousel interval={2000} autoPlay infiniteLoop showThumbs={false} showStatus={false} useKeyboardArrows>
            <div className="background-overlay-imgs">
                <Typography variant="h3" gutterBottom className={classes.white}>
                    DISINFECT ANYTHING
                    </Typography>
                <img className="appSlides" src="/imgs/4.png" alt="img1" style={{ height: 'auto', width: '100%' }} />
            </div>
            <div className="background-overlay-imgs">
                <Typography variant="h3" gutterBottom className={classes.white}>
                    DISINFECT ANYTIME
                    </Typography>
                <img className="appSlides" src="/imgs/5.png" alt="img1" style={{ height: 'auto', width: '100%' }} />
            </div>
            <div className="background-overlay-imgs">
                <Typography variant="h3" gutterBottom className={classes.white}>
                    DISINFECT ANYWHERE
                    </Typography>
                <img className="appSlides" src="/imgs/6.png" alt="img1" style={{ height: 'auto', width: '100%' }} />
            </div>
        </Carousel>
    )
}

export default Corosal;
