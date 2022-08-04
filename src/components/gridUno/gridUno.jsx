import React from "react";
import { Link } from 'react-router-dom';
import ButtonNext from "../buttonNext/buttonNext";
import GridDos from "../gridDos/gridDos";
const GridUno = ()=>{
    return (
        <>
            <div className="general">

            <button className='buttonUno buttonGrid'>1col</button>
            <button className='buttonDos buttonGrid'>2col</button>
            <button className='buttonTres buttonGrid'>3col</button>
            <button className='buttonCuatro buttonGrid'>4col</button>
            <button className='buttonCinco buttonGrid'>2col</button>
            <button className='buttonSeis buttonGrid'>3col</button>
            <button className='buttonSiete buttonGrid'>1col</button>
            <button className='buttonOcho buttonGrid'>2col</button>

            </div>
            <Link to={`/gridDos`}><ButtonNext/></Link>
        </>
    )
}

export default GridUno;