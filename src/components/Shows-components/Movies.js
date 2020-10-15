import React, { Component } from 'react';
import ShowCard from './ShowCard';
import './Shows.css'

const data = {
    "properties": [
    {
        "_id": "593e9297e17df20c4a237d42",
        "index": 0,
        "price": 937180,
        "picture": "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg",
        "city": "Singer",
        "address": "914 Argyle Road",
        "latitude": -33.944576,
        "longitude": 151.25584,
        "bedrooms": 2,
        "bathrooms": 2,
        "carSpaces": 2
    },
    {
        "_id": "593e9297ec4cca9c56bf61af",
        "index": 1,
        "price": 703725,
        "picture": "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property02.jpg",
        "city": "Machias",
        "address": "255 Raleigh Place",
        "latitude": -33.944471,
        "longitude": 151.2541,
        "bedrooms": 2,
        "bathrooms": 1,
        "carSpaces": 0
    },
    {
        "_id": "593e929773c71925e5d7c11c",
        "index": 2,
        "price": 837111,
        "picture": "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg",
        "city": "Bend",
        "address": "580 Amber Street",
        "latitude": -33.944644,
        "longitude": 151.24834,
        "bedrooms": 3,
        "bathrooms": 2,
        "carSpaces": 0
    },
    {
        "_id": "593e92973d4d15eedb129aee",
        "index": 3,
        "price": 648223,
        "picture": "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property04.jpg",
        "city": "Ivanhoe",
        "address": "854 Varanda Place",
        "latitude": -33.940396,
        "longitude": 151.2469,
        "bedrooms": 3,
        "bathrooms": 2,
        "carSpaces": 0
    },
    {
        "_id": "593e929728b7f8543b7907e1",
        "index": 4,
        "price": 771826,
        "picture": "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property05.jpg",
        "city": "Lydia",
        "address": "857 Rockaway Parkway",
        "latitude": -33.944562,
        "longitude": 151.2503,
        "bedrooms": 2,
        "bathrooms": 1,
        "carSpaces": 1
    },
    {
        "_id": "593e92975996a6263d146444",
        "index": 5,
        "price": 686238,
        "picture": "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg",
        "city": "Rosedale",
        "address": "543 Harman Street",
        "latitude": -33.939304,
        "longitude": 151.25046,
        "bedrooms": 2,
        "bathrooms": 1,
        "carSpaces": 1
    },
    {
        "_id": "593e9297a13e246da5ba0884",
        "index": 6,
        "price": 595377,
        "picture": "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property02.jpg",
        "city": "Allison",
        "address": "787 Gerald Court",
        "latitude": -33.937819,
        "longitude": 151.25774,
        "bedrooms": 2,
        "bathrooms": 2,
        "carSpaces": 2
    }]}
class Movies extends Component {

    render() {
        return(
            <div className='flex-container'>
            { data.properties.map( prop => {
                return (<ShowCard show={prop}/>)
            })
                
                }
            </div>
        )
    }
}

export default Movies