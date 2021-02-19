import React from 'react';
import { SearchContainer, SearchInput } from './style';

const RegionSearch = ({handleSearch, search}) => {
  
    const handleChange = (e) => {
        handleSearch(e.target.value);
    };    

    return <SearchContainer>
        <SearchInput
            type="text"
            placeholder="Search for region..."
            value={search}
            onChange={handleChange}
        />
    </SearchContainer>  
}

export default RegionSearch;


