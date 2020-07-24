import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import CovidTracker from './CovidTracker';

const Corosal = () => {
    const [globalData, setGlobalData] = React.useState([]);
    React.useEffect(() => {
        async function fectchData() {
            const includedCountries = ["India"];
            const res = await axios.get("https://api.covid19api.com/summary");
            const filteredCountries = res.data.Countries.filter((filData) => includedCountries.indexOf(filData.Country) > -1);
            const data = [{
                Country: 'Global',
                ...res.data.Global
            },
            ...filteredCountries];
            setGlobalData(data)
        }
        fectchData();
    }, [])

//  interval={3000} autoPlay infiniteLoop
    return (
        <Carousel interval={3000} autoPlay infiniteLoop showThumbs={false} showStatus={false} useKeyboardArrows>
            <div key="content-0" className="my-slide primary">
                <CovidTracker
                    country={"Global"}
                    TotalConfirmed={globalData.length ? globalData[0].TotalConfirmed : 0}
                    TotalDeaths={globalData.length ? globalData[0].TotalDeaths : 0}
                    TotalRecovered={globalData.length ? globalData[0].TotalRecovered : 0}
                    NewConfirmed={globalData.length ? globalData[0].NewConfirmed : 0}
                    NewDeaths={globalData.length ? globalData[0].NewDeaths : 0}
                    NewRecovered={globalData.length ? globalData[0].NewRecovered : 0}
                />
            </div>
            <div key="content-1" className="my-slide secondary">
                <CovidTracker
                    country={"India"}
                    TotalConfirmed={globalData.length ? globalData[1].TotalConfirmed : 0}
                    TotalDeaths={globalData.length ? globalData[1].TotalDeaths : 0}
                    TotalRecovered={globalData.length ? globalData[1].TotalRecovered : 0}
                    NewConfirmed={globalData.length ? globalData[1].NewConfirmed : 0}
                    NewDeaths={globalData.length ? globalData[1].NewDeaths : 0}
                    NewRecovered={globalData.length ? globalData[1].NewRecovered : 0}
                />
            </div>
        </Carousel>

    );
}

export default Corosal;