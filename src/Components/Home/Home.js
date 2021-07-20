import React from 'react';
import geuImg from '../../Assests/GEU.jpg';
import classes from './Home.module.css';
const Home=()=>{
    return <div>
    <img src={geuImg}  className={classes['main-image']}/>
    
    </div>
}
export default Home;