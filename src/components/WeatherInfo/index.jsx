import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import weatherTypes from 'redux/weather/types'
import styled from 'styled-components';
import WeatherPanel from 'components/WeatherPanel';
import { Cards } from './style';

const WeatherContainer = styled.div`
    display: flex;
`;

const WeatherInfo = ({regionInfo, dispatch, response}) => {
    const {regionId, regionName} = regionInfo;

    useEffect(() => {
        if (regionId) {
            dispatch({type: weatherTypes.FETCH_WEATHER, city: regionId});
        }
    }, [regionId, dispatch]);

    let renderWeatherInfos =  response.weather && response.weather.map((day) => {
        return <WeatherPanel key={day.regionName+day.forecastDate} weather={day} regionName={regionName} />
    });

    return <WeatherContainer>
        <Cards>
            {renderWeatherInfos}    
        </Cards>
    </WeatherContainer>
};

const mapStateToProps = (state) => ({
    response: state.weather
});

export default connect(mapStateToProps)(WeatherInfo);