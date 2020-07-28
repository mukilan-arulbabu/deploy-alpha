import React from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Image } from 'react-bootstrap';
import { LightSpeed, Zoom } from 'react-awesome-reveal';

const styles = () => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
        // fontFamily: "initial",
    },
    header: {
        fontSize: '25px',
        fontWeight: 600,
        textDecoration: 'underline',
    },
    content: {
        fontWeight: '400',
        fontSize: '17px',
    },
    paperContainer: {
        borderRadius: '8px',
        background: '#f0f8ff96',
        width: '95%',
        alignItems: 'center',
        padding: '10px 0px'
    }
});

class Imgs extends React.Component {
    state = {
        imgCnt: 1,
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            if (this.state.imgCnt === 1) {
                this.setState({ imgCnt: 2 });
            } else if (this.state.imgCnt === 2) {
                this.setState({ imgCnt: 3 });
            } else {
                this.setState({ imgCnt: 1 });
            }
        }, 5000);
    }

    componentWillMount() {
        clearInterval(this.timer)
    }

    render() {
        const { classes } = this.props;
        const { imgCnt } = this.state;
        return (
            <div className={classes.root}>
                <Grid container className={classes.paperContainer}>
                    <Grid item xs={12} sm={8} style={{ position: 'relative' }}>
                        <Hidden smUp>
                            <Zoom>
                                <Image src="/imgs/b1m.png" fluid />
                            </Zoom>
                        </Hidden>
                        <Hidden smDown>
                            <Zoom>
                                <Image src="/imgs/b1.png" fluid />
                            </Zoom>
                        </Hidden>
                        {imgCnt === 1 && <div className="background-overlay-cover no1">
                            <LightSpeed>
                                <Typography variant="h5" gutterBottom className={classes.header}>
                                    Food and Packages
                        </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                    ► Fruits and Vegetables
                        </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                    ► Groceries and Milk Packets
                        </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                    ► Food Takeaway Packets
                        </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                    ► Online Delivery PAckages
                        </Typography>
                            </LightSpeed>
                        </div>}
                        {imgCnt === 2 && <div className="background-overlay-cover no2">
                            <LightSpeed>
                                <Typography variant="h5" gutterBottom className={classes.header}>
                                    Baby Products
                        </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                    ► Bottles & Napkins
                        </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                    ► Toys
                        </Typography>
                            </LightSpeed>
                        </div>}
                        {imgCnt === 3 && <div className="background-overlay-cover no3">
                            <LightSpeed>
                                <Typography variant="h5" gutterBottom className={classes.header}>
                                    Electronics & Personal Items
                        </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                    ► Mobile phones, Laptops & Power banks
                        </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                    ► Hand bags, Glasses, Wallets & Watches
                        </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                    ► Currency Notes & Keys
                        </Typography>
                                <Typography variant="body2" gutterBottom className={classes.content}>
                                    ► Masks & Hand Gloves
                        </Typography>
                            </LightSpeed>
                        </div>}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Image src="/imgs/b2.png" fluid />
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default withStyles(styles)(Imgs);
