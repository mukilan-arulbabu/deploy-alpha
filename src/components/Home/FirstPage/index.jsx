import React from 'react';
import CovidCorosal from './CovidCarousal';
import AppCarousal from './AppCarousal';

const HomeFirstPage = () => {
    const [height, setHeight] = React.useState(130);

    React.useEffect(() => {
        const fullHeight = window.innerHeight;
        const covidHeight = document.getElementById("covidCarousal").offsetHeight;
        setHeight((fullHeight - covidHeight) - 64);
    }, []);


    return (
        <div id="initFirstPage" style={{ height: '100%', width: '100%' }}>
            <div id="covidCarousal" className="covid-carousal">
                <div className="background-overlay" />
                <CovidCorosal />
            </div>
            <div className="appSlider-section" style={{ height }}>
                {/* <div className="divTest" style={{ height: '50%', background: 'blue'}}>

                </div> */}
                <AppCarousal />
            </div>
        </div>
    )
}

export default HomeFirstPage;