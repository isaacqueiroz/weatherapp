import RegionsList from 'components/RegionList';
import WeatherInfo from 'components/WeatherInfo';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { Container, Header } from './style'


export default function App() {
    const [regionInfo, setRegionInfo] = useState({})
    
    const handleRegionSelection = (regionId, regionName) => {
        setRegionInfo({regionId, regionName});
    }    

    return (
        <Container>
            <Header>Weather App</Header>
            <Provider store={store}> 
                <RegionsList handleRegionSelection={handleRegionSelection} />
                <WeatherInfo regionInfo={regionInfo}/>
            </Provider>
        </Container>
    );
}

