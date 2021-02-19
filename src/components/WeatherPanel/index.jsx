import React from 'react';
import { CardItem, CardContent } from './style';

const WeatherPanel = ({weather, regionName}) => {
    if (weather) {
        return <CardItem>
            <CardContent>
                <h2>Forecast For {regionName}</h2>
                <p>Date: {new Date(weather.forecastDate).toLocaleDateString()}</p>
                <p>Min: {weather.tMin}</p>
                <p>Max: {weather.tMax}</p>
                <p>Precipitation: {weather.precipitaProb}%</p>
            </CardContent>
        </CardItem>        
    }
}

export default WeatherPanel;
