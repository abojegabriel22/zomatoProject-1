import React from 'react';
import './app.css';
import Header from './Header';

const App = () => {
    return(
        <>
        <Header/>
        <div style={{height:"200px", width:"500px", backgroundColor:"skyblue", textAlign:"center"}}>
        <h1>React zom App</h1>
        <h2>final project</h2>

        </div>
        <div className = "secondDiv"></div>
        
        </>
    )
}

export default App;