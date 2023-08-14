import React from 'react'
import locationIcon from '../images/location-icon.png'

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={props.item.imageUrl} alt=""/> 
            <div>
                <div className="card-location-details">
                    
                    <p className="card-location"><img className="card-location-image" src={locationIcon} /> {props.item.location}</p>
                    <a className="card-googlemaps" href={props.item.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <div className="card-details">
                    <h1 className="card-title">{props.item.title}</h1>
                    <p className="card-timeperiod">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="card-description">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}