import React from "react";
import Precautions from "./Precautions";
import DetailMap from "./DetailMap";
import {Link} from "react-router-dom";
import {LinkedinShareButton,  
    TwitterShareButton, FacebookShareButton,LinkedinIcon, FacebookIcon,TwitterIcon } from 'react-share';

const API_KEY = "82e89009629e31d94b5e0e6bc9b6533b";

class CityWeather extends React.Component {

    state = {
        temperature : undefined,
        lowest_temp: undefined,
        highest_temp: undefined,
		city : undefined,
		country : undefined,
		humidity : undefined,
		description : undefined,
        main :undefined,
        lat : undefined,
        long : undefined
    }	
  
    componentDidMount = async () => {        
        const city = this.props.location.state.city;
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
	 	const data = await api_call.json();
	 	console.log(data);
	 	if (city){
	 		this.setState({
            temperature : data.main.temp,
            lowest_temp: data.main.temp_min,
            highest_temp: data.main.temp_max,
	 		city : data.name,
	 		country : data.sys.country,
			humidity : data.main.humidity,
            description : data.weather[0].description,
            main : data.weather[0].main,
            lat : data.coord.lat,
            lon : data.coord.lon
	 	});

	 	} else {
	 		this.setState({
            temperature : undefined,
            lowest_temp: undefined,
            highest_temp: undefined,
	 		city : undefined,
	 		country : undefined,
			humidity : undefined,
            description : undefined,
            main: undefined,
            lat : undefined,
            long :undefined
			});

	 	}
	 	
	}
    render(){
        return(   
        <div className="detail_wrapper" >
                <div className="detail-container"> 
                    <br></br>
                    <header>
                        <a href="/"><img className="logo" src="https://www.truecaller.com/img/truecaller-logo-blue.959ba34.png"   height="42" width="80"/></a>
                       
                            <ul className="menu">
                                <li>
                                    <FacebookShareButton
                                        url={"https://www.truecaller.com/"}>
                                        <FacebookIcon
                                        size={32}
                                        round />
                                    </FacebookShareButton> 
                                </li>
                                <li>
                                    <TwitterShareButton
                                        url={"https://www.truecaller.com/"}>
                                        <TwitterIcon
                                        size={32}
                                        round />
                                    </TwitterShareButton>                                
                                </li>
                                <li>                                    
                                    <LinkedinShareButton
                                        url={"https://www.truecaller.com/"}>
                                        <LinkedinIcon
                                        size={32}
                                        round />
                                    </LinkedinShareButton> 
                                </li>
                                
                            </ul>
                        <hr></hr>
                    </header>
                    {	
                        this.state.city && 
                        <p className="weather__key"   > <br></br>
                            &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;Location: 
                            <span className= "weather__value"  >  { this.state.city }, { this.state.country }</span>
                        </p> 
                    }            
                    { 	
                        this.state.temperature && 
                        <p className="weather__key"   >
                            &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;Current Temperature: 
                            <span className= "weather__value"   > { this.state.temperature} &deg;C	</span>
                        </p> 
                    }
                    
                    { 	
                        this.state.lowest_temp &&
                        <p className="weather__key"    >
                            &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;Minimum Temperature: 
                            <span className= "weather__value"  > { this.state.lowest_temp } &deg;C	</span>
                        </p> 
                    }
                    { 	
                        this.state.highest_temp && 
                        <p className="weather__key"    >
                            &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;Maximum Temperature: 
                            <span className= "weather__value"  > { this.state.highest_temp} &deg;C	</span>
                        </p> 
                    }
                    
                    { 	
                        this.state.humidity && 
                        <p className="weather__key"   >
                            &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;Humidity: 
                            <span className= "weather__value" > { this.state.humidity }%</span>
                        </p> 
                    }
                    { 	
                        this.state.description && 
                        <p className="weather__key"   > 
                            &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;Conditions: 
                            <span className= "weather__value"> {  this.state.description} </span>
                        </p> 
                    }   
                
                </div>
                <DetailMap className="map" 
                    lat= {this.state.lat}
                    lon= {this.state.lon}
                    city ={this.state.city}  
                />                  
                <Precautions 
                    main={this.state.main}
                    temperature = {this.state.temperature}
                />   
                <button className="button" >
                    <Link to = "/"  style={{ textDecoration: 'none' }}>
                     Go Home
                    </Link>
                </button>  
        </div>
       );
    }
}


export default CityWeather;