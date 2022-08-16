import React from "react";
import { Link } from 'react-router-dom';
import ButtonNext from "../buttonNext/buttonNext";
import GridCuatro from "../GridCuatro/gridCuatro";
import './gridTres.css'

const GridTres = ()=>{
    return(
        <>
        <div className="fondo">
        <div className="general__GridTres">
            <div className="nav">
                <div className="logo"></div>
                <div className="menu">
                    <ul>
                        <li>HOME</li>
                        <li>SHOP</li>
                        <li>CONTACTO</li>
                    </ul>
                </div>
            </div>
            <div className="hero">
                <h1>#SOMOSFLIPA</h1>
                <p>Y yo soy una baja de ejemplo</p>
            </div>
            <div className="bloques">
            <div className="bloqueUno bloque__GridTres"></div>
            <div className="bloqueDos bloque__GridTres"></div>
            <div className="bloqueDos__Duplicado bloque__GridTres"></div>
            <div className="bloqueTres bloque__GridTres"></div>
            <div className="bloqueCuatro bloque__GridTres">
                <label htmlFor="">Nombre</label>
                <input type="text" />
                <label htmlFor="">Mail</label>
                <input type="text" />
                <label htmlFor="">Mensaje</label>
                <input type="text" />
            </div>
            <button className="gridTres__Button buttonGrid">BOTON</button>                
            </div>

        </div>
        <Link to={ `/gridCuatro`}><ButtonNext className="buttonNext__Grid "/></Link>
        </div>
        </>
    )
}
export default GridTres;