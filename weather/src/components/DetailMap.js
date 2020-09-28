import React from 'react';
import Maps from "./Maps";

class DetailMap extends React.Component {

    render() {
        var lat = this.props.lat ;
        var lon = this.props.lon;
        var city =  this.props.city;           
        return (
            <div>
                {
                    this.props.lat && this.props.lon &&  
                    <Maps 
                        id="myMap"
                        options={{
                        center: { lat: Number(lat), lng: Number(lon)},
                        zoom: 7
                        }}
                        onMapLoad={map => {
                        const marker = new window.google.maps.Marker({
                            position: { lat: Number(lat), lng: Number(lon) },
                            map: map,
                            title: city,   
                            animation: window.google.maps.Animation.DROP                                      
                        });
                        }}
                    />
                }
            </div>
        );
    }
}

export default DetailMap;
