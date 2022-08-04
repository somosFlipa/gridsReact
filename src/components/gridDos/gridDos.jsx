import React from "react";
import { Link } from 'react-router-dom';
import GridTres from "../gridTres/gridTres";
import ButtonNext from "../buttonNext/buttonNext";

const GridDos = ()=>{
    return(
        <>
        <div className="generalDos">
            <h1>Mobile H1-32px</h1>
            <p>Lorem impsum blabla bla 12431242 gjiuoñEFHJAOS RJ823UR9 mpsum blabla bla 124 m impsum blabla bla 12431242 gjiuoñEFHJAOS RJ823UR9 mpsum blabla bla 124</p>
            <div className="verMas">
                <p>ver mas</p> <span>+</span>
            </div>
            <button className='secondButton buttonGrid'>4col</button>
    </div>
    <Link to={`/gridTres`}><ButtonNext/></Link>
        </>
    )
}

export default GridDos;