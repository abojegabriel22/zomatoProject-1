import React, {useState, useEffect} from 'react';
import './Search.css';

const base_url = 'https://internfeb.onrender.com'
//restaurants?stateId=3

const Search = () => {

    const [location,setLocation] = useState('')
    const [restData,setRestData] = useState('')
    
    useEffect(() => {
        fetch(`${base_url}/location`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setLocation(data)
        })
    },[])

    const renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item._id} value={item.state_id}>
                        {item.state}
                    </option>
                )
            })
        }

    }
    
    const handleCity = (event) => {
        console.log(event.target.value)
        let stateId = event.target.value
        fetch(`${base_url}/restaurants?stateId=${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setRestData(data)
        })
    }

    const renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item.restaurant_id} value={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

    return(
        <>
            <div className="search">
                <div className="logo">
                    <span>d!</span>
                </div>
                <div className="heading">
                    find best place near you
                </div>
                <div className="dropdown">
                    <select onChange={handleCity}>
                        <option>---SELECT YOUR CITY---</option>
                        {renderCity(location)}
                    </select>
                    <select id="restSelect">
                        <option>---SELECT YOUR RESTAURANTS---</option>
                        {renderRest(restData)}
                    </select>
                </div>
            </div>
        </>
    )
}
export default Search;