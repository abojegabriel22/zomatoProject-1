import React,{useState,useEffect, Component} from 'react';
import './listing.css';
import { useParams } from 'react-router-dom';
import ListingDisplay from './listingDisplay';
import axios from 'axios';
import CuisineFilter from '../filters/cuisoneFilter';
import CostFilter from '../filters/costFilter';
import Header from '../Header';

const base_url = 'https://internfeb.onrender.com';

const Listing = () => {
    let params = useParams();


    const [restList,setRestList] = useState();
    let mealid = params.mealId;
    

    useEffect(() => {
        
        sessionStorage.setItem('mealId',mealid);
        axios.get(`${base_url}/restaurants?mealId=${mealid}`)
        .then((res)=>{
            setRestList(res.data)
        })
    },[])

    const setDataPerFilter=(data)=>{
        setRestList(data)
    }

    return(
        <>
            <Header/>
            <div className='row'>
                <div id='mainListing'>
                    <div id='filter'>
                        <CuisineFilter mealId={mealid} restPerCuisine={(data)=>{setDataPerFilter(data)}}/>
                        <CostFilter mealId={mealid} restPerCost={(data)=>{setDataPerFilter(data)}}/>
                    </div>
                    <ListingDisplay listData={restList}/>
                </div>
            </div>
            
        </>
    )

}

export default Listing