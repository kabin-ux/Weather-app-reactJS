import React, { useEffect, useState } from 'react'
import WeatherCards from './WeatherCards';
import './style.css';

const Temp = () => {
    const [searchValue, setSearchValue] = useState('Kathmandu');
    const [tempInfo, setTempInfo] = useState('');

    const getWeatherInfo = async () => {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${process.env.REACT_APP_SECRET_KEY}`;
            
            let response = await fetch(url);
            let data = await response.json();

            const {temp, humidity, pressure} = data.main
            const {country, sunset} = data.sys;
            const {main: weatherType} = data.weather[0];
            const {speed} = data.wind;
            const {name} = data;

            const myNewWeatherInfo = {
                temp, humidity, pressure, country, sunset, weatherType, speed, name
            }

            setTempInfo(myNewWeatherInfo);

        }catch(error){
            console.log("error");
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input type='search' placeholder='Search...' className='searchTerm' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <button className='search-btn' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>

            {/*  Main components for weather card*/}
            <WeatherCards tempInfo={tempInfo} />
        </>
    )
}

export default Temp;
