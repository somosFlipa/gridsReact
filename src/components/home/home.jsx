import React from "react";
import { Link } from 'react-router-dom';
import ButtonNext from "../buttonNext/buttonNext";
import './home.css'
const Home = ()=>{
    return (
        <>
        <div className="home__Texto">
        <h1>Bienevenidxs a los proyectos de grid</h1>
  
        <p>aguanten las milanesas</p>     
        <Link to={`/gridUno`} ><ButtonNext/></Link>
        </div>

        </>
    )
}

export default Home;