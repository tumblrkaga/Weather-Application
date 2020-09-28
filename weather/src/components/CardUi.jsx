import React from "react";
import {Link} from "react-router-dom";


import "./card-style.css"

const Card = props =>{
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <Link to={props.link } >                    
                    <img src={props.imgsrc} 
                     className="card-img-top"/>
                </Link> 
            </div>        
            <div className="card-body text-dark">
                <h4 className="card-title"> {props.title} &deg;C </h4>
                <h6 className="card-subtitle" >{props.subtitle}</h6>
                <p className="card-text text-secondary">{props.gist}</p>                
                <Link to={props.link }  
                    className="btn btn-outline-success" 
                    style={{ textDecoration: 'none' }}>
                    Get Weather 
                </Link> 
            </div>
        </div>
    );
}

export default Card;