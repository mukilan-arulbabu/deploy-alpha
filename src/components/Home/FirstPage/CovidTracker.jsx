import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  rooting: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px'
  },
  display: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  confirmed: {
    // color: "#28a745"
    color: "white"
  },
  active: {
    // color: "#28a745"
    color: "white"
  },
  recovered: {
    // color: "#28a745"
    color: "white"
  },
  deceased: {
    color: "white"
  },
  white: {
    color: "black"
  }
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CovidTracker = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.deceased} gutterBottom>
          {`${props.country} Covid-19 Virus Updates`}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2} />
        <Grid item xs={6} sm={2}>
          <div className={classes.display}>
            <Typography className={classes.confirmed} variant="caption" gutterBottom>
              Confirmed
            </Typography>
            <Typography className={classes.confirmed} variant="caption" gutterBottom>
              {`+${numberWithCommas(props.NewConfirmed)}`}
            </Typography>
            <Typography className={classes.confirmed} variant="h6" gutterBottom>
              {numberWithCommas(props.TotalConfirmed)}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} sm={2}>
          <div className={classes.display}>
            <Typography className={classes.active} variant="caption" gutterBottom>
              Active
            </Typography>
            <Typography className={classes.active} variant="caption" gutterBottom>
              &nbsp;
            </Typography>
            <Typography className={classes.active} variant="h6" gutterBottom>
              {numberWithCommas(props.TotalConfirmed - props.TotalRecovered)}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} sm={2}>
          <div className={classes.display}>
            <Typography className={classes.recovered} variant="caption" gutterBottom>
              Recovered
            </Typography>
            <Typography className={classes.recovered} variant="caption" gutterBottom>
              {`+${numberWithCommas(props.NewRecovered)}`}
            </Typography>
            <Typography className={classes.recovered} variant="h6" gutterBottom>
              {numberWithCommas(props.TotalRecovered)}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} sm={2}>
        <div className={classes.display}>
              <Typography className={classes.deceased} variant="caption" gutterBottom>
                Deceased
            </Typography>
              <Typography className={classes.deceased} variant="caption" gutterBottom>
                {`+${numberWithCommas(props.NewDeaths)}`}
              </Typography>
              <Typography className={classes.deceased} variant="h6" gutterBottom>
                {numberWithCommas(props.TotalDeaths)}
              </Typography>
            </div>
        </Grid>
        <Grid item xs={12} sm={2} />
      </Grid>
    </div>
  )
}

export default CovidTracker;