import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Img4 from '../../../imgs/4.png';
import Img5 from '../../../imgs/5.png';
import Img6 from '../../../imgs/6.png';

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
                <img className="appSlides" src={Img4} alt="img1" style={{ height: 'auto', width: '100%' }} />
            </div>
            <div className="background-overlay-imgs">
                <Typography variant="h3" gutterBottom className={classes.white}>
                    DISINFECT ANYTIME
                    </Typography>
                <img className="appSlides" src={Img5} alt="img1" style={{ height: 'auto', width: '100%' }} />
            </div>
            <div className="background-overlay-imgs">
                <Typography variant="h3" gutterBottom className={classes.white}>
                    DISINFECT ANYWHERE
                    </Typography>
                <img className="appSlides" src={Img6} alt="img1" style={{ height: 'auto', width: '100%' }} />
            </div>
        </Carousel>
    )
}

export default Corosal;
