import React,{useState,useEffect, Component} from 'react';
import './listing.css';
import { useParams } from 'react-router-dom';
import ListingDisplay from './listingDisplay';
import axios from 'axios';

const base_url = 'https://internfeb.onrender.com';

const Listing = () => {
    let params = useParams();


    const [restList,setRestList] = useState();
    

    useEffect(() => {
        let mealid = params.mealId;
        sessionStorage.setItem('mealId',mealid);
        axios.get(`${base_url}/restaurants?mealId=${mealid}`)
        .then((res)=>{
            setRestList(res.data)
        })
    },[])

    return(
        <>
            <div className='row'>
                <div id='mainListing'>
                    <div id='filter'>

                    </div>
                    <ListingDisplay listData={restList}/>
                </div>
            </div>
            
        </>
    )

}

export default Listing