import React,{useState,useEffect} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay'
const base_url = 'https://internfeb.onrender.com'

const QuickSearch = () =>{


    const [MealType,setMealType] = useState();

    useEffect(()=>{
        fetch(`${base_url}/mealType`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            setMealType(data)
        })
    },[])

    return(
        <>
            <div className="quicksearch">
                <span className="quickHeading">Quick Search</span>
                <span className="quickSubHeading">Find Restaurants By MealTime</span>
                <QuickDisplay mealData={MealType}/>
            </div>
        </>
    )
}
export default QuickSearch;