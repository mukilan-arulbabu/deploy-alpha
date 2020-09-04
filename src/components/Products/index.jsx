import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import FirstComponent from "./Landing";
import SecondComponent from "./AFT";
import ThirdComponent from "./Cabinet1";
import FourthComponent from "./Cabinet2";
import FifthComponent from "./Cabinet3";
import SixthComponent from "./Tower";
import SeventhComponent from "./Tunnel";
import EighthComponent from "./APS";
import Footer from "../Footer";


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
  const [height, setHeight] = React.useState(130);

  React.useEffect(() => {
    const fullHeight = window.innerHeight;
    setHeight((fullHeight) - 64);
  }, []);

  return (
    <>
      <div className={classes.slide} style={{height}}>
        <FirstComponent />
      </div>
      <div className={classes.slidePad}>
        <SecondComponent />
      </div>
      <div className={classes.slidePad}>
        <EighthComponent />
      </div>
      <div className={classes.slidePad}>
        <SixthComponent />
      </div>
      <div className={classes.slidePad}>
        <ThirdComponent />
      </div>
      <div className={classes.slidePad}>
        <FourthComponent />
      </div>
      <div className={classes.slidePad}>
        <FifthComponent />
      </div>
      <div className={classes.slidePad}>
        <SeventhComponent />
      </div>
      
      <Footer />
    </>
  );
}
