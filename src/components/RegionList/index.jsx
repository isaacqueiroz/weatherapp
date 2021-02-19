import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import regionTypes from 'redux/region/types'
import RegionSearch from 'components/RegionSearch';
import { RegionPanel, RegionList, RegionLink, Link } from './style';


const RegionsList = ({dispatch, handleRegionSelection, response}) => {
    const [search, setSearch] = useState("")
    
    useEffect(() => {
        dispatch({type: regionTypes.FETCH_REGIONS});
    }, [dispatch]);

    const handleClick = (e, id, local) => {
        e.preventDefault();
        handleRegionSelection(id, local);
    }
    
    const handleSearch = (search) => {
        setSearch(search);
    } 

    return <RegionPanel>
        <RegionSearch handleSearch={handleSearch} />
        <RegionList>
            {
            response && response.regions && response.regions.map(region => {
                if (region.local.toUpperCase().includes(search.toUpperCase())) {
                    return <RegionLink key={region.local}>
                        <Link onClick={(e) => handleClick(e, region.globalIdLocal, region.local)} href="#">{region.local}</Link>
                    </RegionLink>
                }
                return false;
            })
            }
        </RegionList>
    </RegionPanel>;
};

const mapStateToProps = (state) => ({
    response: state.regions
})

export default connect(mapStateToProps)(RegionsList);

