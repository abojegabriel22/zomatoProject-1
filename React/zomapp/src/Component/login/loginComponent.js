import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

const url = "http://3.17.216.66:5000/api/auth/login"

const Login = () => {

    let navigate = useNavigate();
    const initialValues = {
        email: "abojejunior@gmail.com",
        password: "123456789"
    };

    const [values, setValues] = useState(initialValues);
    const [message,setMessage] = useState()

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const checkout = () => {
        console.log(values)
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                setMessage(data.token)
            } else{
                sessionStorage.setItem('ltk',data.token)
                navigate(`/`)
            }
        })
    }

    // let [id] = useState(Math.random()*100000);
    // let [rest_name] = params.restName;
    // let [name] = useState['Aboje'];
    // let [email] = useState["abojejunior@gmail.com"];
    // let [cost] = useState(Math.random()*100000);
    // let [phone] = useState('08022911266');
    // let [address] = useState('A54 Army Estate Kubwa Abuja');


    
    return(
        <>
            <Header/>
            <div className="container">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3>Login</h3>
                    </div>
                    <div className="panel-body">
                        
                        <div className='row'>
                            <h2 style={{color:'red'}}>{message}</h2>
                            <div className='col-md-6 form-group'>
                                <label for='email' className='control-label'>Email</label>
                                <input className='form-control' id='email' name='email' value={values.email} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label for='password' className='control-label'>password</label>
                                <input className='form-control' id='password' name='password' type="password" value={values.password} onChange={handleInputChange}/>
                            </div>
                        </div>
                        
                        <button className="btn btn-danger" onClick={checkout}>Login</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login