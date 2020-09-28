import React from "react";

class Precautions extends React.Component {


    Precaution(condition) {
        switch(condition) {
            case 'Clear' :
                return 'Enjoy the day! Remember the sunscreen and sunglasses.' ;
            case 'Clouds':
                return 'Enjoy the day! Remember the sunscreen and sunglasses.';
            case 'Rain':
                return 'Make sure to pack your umbrella and raincoat!';
            case 'Thunderstorm':
                return 'Take shelter when you see dark clouds or lightning, hear thunder or feel hail!' ;
            case 'Fog'||'Mist':
                return 'Make sure that you can be seen on the road.When driving, reduce your speed and turn on your headlights!';
            case 'Drizzle':
                return 'Don\'t forget to wear a hat!';
            case 'Snow':
                return 'Please dress in layers with scarf on and be visible!';
            case 'Gust':
                return 'Avoid taking shelter under a bridge, viaduct or overpass, since winds are more intense!';
            case 'Haze':
                return 'Pack your mask!';
            default:
                return null;        
        }
    }

    render() {        
        var condition = this.props.main ;
        var precaution = this.Precaution(condition);
        var temperature =  this.props.temperature;               
        return (
            <div className="precaution" >            
                <p >
                    <br></br>
                    &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;
                    &nbsp; &nbsp;  &nbsp;  &nbsp;{precaution}                                                   
                </p>             
            </div>
        );
    }
}

     
 export default Precautions;