import React from 'react';
import CovidCorosal from './CovidCarousal';
import Imgs from './Imgs';

const HomeFirstPage = () => {
    return (
        <div id="initFirstPage" style={{ height: '100%', width: '100%' }}>
            <div id="covidCarousal" className="covid-carousal">
                <div className="background-overlay" />
                <CovidCorosal />
            </div>
            <div className="appSlider-section">
                <Imgs />
            </div>
        </div>
    )
}

export default HomeFirstPage;