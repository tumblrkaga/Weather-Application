import React from "react";
import Card from "./CardUi";
import stockholm from "../img/stockholm.PNG";
import bangalore from "../img/bangalore.PNG";
import nairobi from "../img/nairobi.PNG";


const API_KEY = "82e89009629e31d94b5e0e6bc9b6533b";

class Cards extends React.Component {
    /**use async to make htttp call very easy* */
    state = {
        activeTemp:[]
      }

    componentDidMount = async () => {    
    var cities = ["Bangalore", "Nairobi", "Stockholm"];
    var city_temp = [];
    for(var i=0;i<cities.length;i++){
        // push the component to elements!
        const req = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${API_KEY}&units=metric`);
        const temperature = await req.json();
        city_temp.push( temperature.main.temp )
    }     
    this.setState({activeTemp:city_temp});
    }

    render() {         
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card   imgsrc={bangalore} 
                            title={this.state.activeTemp[0]}  
                            subtitle = "Bangalore, India"
                            gist="Bengaluru is the capital of India's  Karnataka state.The center of India's high-tech industry, and known for its parks." 
                            link={{ pathname: `/temp/bangalore`, state :{city:"bangalore"} }}  
                    />
                </div>
                <div className="col-md-4">
                    <Card   imgsrc={nairobi}  
                            title={this.state.activeTemp[1]} 
                            subtitle = "Nairobi, Kenya" 
                            gist = "Nairobi is Kenya’s capital city.Nairobi is also often used as a jumping-off point for safari trips elsewhere in Kenya."
                            link={{ pathname: `/temp/nairobi`, state :{city:"nairobi"} }}
                    />
                </div>
                <div className="col-md-4">
                    <Card   imgsrc={stockholm}  
                            title= {this.state.activeTemp[2]} 
                            subtitle = "Stockholm, Sweden"
                            gist = "Stockholm, the capital of Sweden, encompasses 14 islands on an extensive Baltic Sea archipelago."
                            link={{ pathname: `/temp/stockholm`, state :{city:"stockholm"} }}  
                    />
                </div>
            </div>
        </div>
    );
  };
}

export default Cards;