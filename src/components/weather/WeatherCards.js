import React, { useEffect, useState } from 'react'

const WeatherCards = ({tempInfo}) => {
    const {
        temp, humidity, pressure, country, sunset, weatherType, speed, name
    } = tempInfo;

    const [weatherState, setWeatherState] = useState('');

    useEffect(() => {
        if(weatherType){
            switch(weatherType){
                case "Clouds":
                    setWeatherState('wi-day-cloudy-high');
                    break;
                case "Haze":
                    setWeatherState('wi-day-haze');
                    break;
                case "Clear":
                    setWeatherState('wi-day-sunny');
                    break;
                case "Mist":
                    setWeatherState('wi-dust');
                    break;
                case "Rain":
                    setWeatherState('wi-rain');
                    break;
                case "Snow":
                    setWeatherState('wi-day-snow');
                    break;
                default:
                    setWeatherState('wi-day-sunny') 
            };
        };
    }, [weatherType]);

    let sec = sunset;
    let date = new Date(sec * 1000);
    let sunsettime = `${date.getHours()}:${date.getMinutes()} `;

    return (
        <>
            <div className='widget'>
                <div className='weather-icon'>
                    <i className={`wi ${weatherState}`}></i>
                </div>

                <div className='weather-info'>
                    <div className='temperature'>
                        <span>{temp}&deg;C</span>
                    </div>
                    <div className='description'>
                        <div className='weather-condition'>{weatherType}</div>
                        <div className='place'>
                            {name}, {country}
                        </div>
                    </div>
                </div>

                <div className='date'>{new Date().toLocaleString()}</div>

                    {/* four column components */}
                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className='two-sided-section'>
                            <p>
                                <i className={'wi wi-sunset'}></i>
                            </p>
                            <p  className='extra-info-leftside'>{sunsettime} <br/>
                                Sunset
                            </p>
                            
                        </div>
                        <div className='two-sided-section'>
                            <p>
                                <i className={'wi wi-strong-wind'}></i>
                            </p>
                            <p className='extra-info-leftside'>{speed} <br/>
                                Speed
                            </p>
                        </div>
                    </div>

                    <div className='weather-extra-info'>
                        <div className='two-sided-section'>
                            <p>
                                <i className={'wi wi-rain'}></i>
                            </p>
                            <p className='extra-info-leftside'>{pressure} <br/>
                            Pressure
                            </p>
                        </div>

                        <div className='two-sided-section'>
                            <p>
                                <i className={'wi wi-humidity'}></i>
                            </p>
                            <p className='extra-info-leftside'>{humidity}<br/>
                            Humidity
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCards;
