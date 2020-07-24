import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Jello } from 'react-awesome-reveal';

const useStyles = makeStyles({
    white: {
        color: 'white',
        fontWeight: 600,
        letterSpacing: '1px',
    },
    prodElements: {
        position: 'absolute',
    }
});

const FirstPage = () => {
    const classes = useStyles();
    return (
        <section className="contact-image-container" style={{ height: '100%', width: '100%' }}>
            <div className="background-overlay" />
            <div className={classes.prodElements}>
                <Jello>
                    <Typography variant="h2" gutterBottom className={classes.white}>
                        Contact Us
                    </Typography>
                </Jello>
            </div>
        </section>
    )
}

export default FirstPage;