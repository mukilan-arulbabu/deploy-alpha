import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        // padding: '0 30px',
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
        // background: 'aliceblue',
        width: '95%',
        alignItems: 'center',
        margin: "20px",
    },
    white: {
        color: "#f57341"
    }
});

const SecondPage = () => {
    const [height, setHeight] = React.useState(130);
    React.useEffect(() => {
        const fullHeight = window.innerHeight;
        setHeight((fullHeight - 19));
    }, []);

    const classes = useStyles();
    return (
        <div className={classes.root} style={{ height }}>
            <Grid container className={classes.paperContainer}>
                <Grid item xs={12} className="textCenter">
                    <Typography variant="h3" gutterBottom className={classes.white}>
                        We&#39;d love to hear from you
                    </Typography>
                    <Typography variant="h6" gutterBottom className="textCenter">
                        We’re here to help and answer any question you might have. Please reach us at sales@alphabiotech.in / 9176348700.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default SecondPage;