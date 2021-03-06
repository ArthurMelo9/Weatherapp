import React, { useState } from 'react';
/*import Home from './Home';*/
/*import LoginBox from './LogInBox';*/
import LogInBox from './LogInBox';



const api = {
    key: "61bac87800b74d8c2f3709449e8ef72b",
    base: "https://api.openweathermap.org/data/2.5/",
};

function WeatherApp() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const [loggedIn, setLoggedIn] = useState(false);



    const search = evt => {
        if (evt.key === 'Enter') {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                })


        }
    }
    const dateBuilder = (d) => {
        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    };
    return (
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 25) ? 'App warm' : 'App') : 'App'}>
            <main>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search location..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    ></input>
                </div>

                <div>
                    {(typeof weather.main != "undefined") ? (
                        <div style={{ float: "right" }}>
                            <div className="location-box">
                                <div className="location">{weather.name},{weather.sys.country}</div>
                                <div className="date">{dateBuilder(new Date())}</div>
                            </div>
                            <div className="weather-box">
                                <div className="temperature">{Math.round(weather.main.temp)}°C </div>
                                <div className="weather">{weather.weather[0].main}</div>
                            </div>
                        </div>

                    ) : ('')}
                    {
                        loggedIn === true ?
                            <p>Welcome Arthur! What do you have for us today? Add a new post...</p> : null
                    }
                    {/* {!userLoggedIn && <LogInBox setUserLoggedIn={setUserLoggedIn} />} */}
                    <div style={{ float: "left" }}>
                        <LogInBox />
                    </div>

                </div>

            </main>


        </div>
    )
}

export default WeatherApp;