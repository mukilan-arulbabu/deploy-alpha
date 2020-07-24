import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import FirstComponent from "./FirstPage";
import SecondComponent from "./SecondPage";
import ThirdComponent from "./ThirdPage";
import Footer from "../Footer";
import AboutUs from "./AboutUs";

const useStyles = makeStyles({
  slide: {
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  },
  slidePad: {
    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 0px',
  },
});

export default function HomePage() {
  const classes = useStyles();
  return (
    <>
      <section className={classes.slide}>
        <FirstComponent />
      </section>
      <section className={classes.slidePad}>
        <SecondComponent />
      </section>
      <section className={classes.slidePad}>
        <ThirdComponent />
      </section>
      <section className={classes.slidePad}>
        <AboutUs />
      </section>
      <Footer />
    </>
  );
}
