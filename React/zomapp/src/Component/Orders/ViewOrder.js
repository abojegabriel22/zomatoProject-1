import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DisplayOrder from './DisplayOrder';
import Header from '../Header';

const url = 'https://internfeb.onrender.com/orders';

const ViewOrder = () => {

    const [orders,setOrder] = useState();
    let sessionData = sessionStorage.getItem('userInfo');
    let data = JSON.parse(sessionData)

    useEffect(() => {
        axios.get(`${url}?email=${data.email}`).then((res) => {setOrder(res.data)})
    })

    return(
        <>
            <Header/>
            <DisplayOrder orderData={orders}/>
        </>
    )

}
export default ViewOrder