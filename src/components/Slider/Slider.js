import React, {Component} from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './Slider.css'

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

class Slider extends Component {
  
        state = {
          shows:data.properties,
          show:data.properties[0]
        }
  

    nextShow = () => {
      if(this.state.show.index !== data.properties.length-1){
        const newIndex = this.state.show.index + 1;
        this.setState({
          show:  data.properties[newIndex]
        })
      }
    }
    
    prevShow = () => {
      if (this.state.show.index !== 0){
        const newIndex = this.state.show.index - 1;
        this.setState({
          show:  data.properties[newIndex]
        })
      }
    }

    render(){
        const {shows, show} = this.state;
        return (
          <div >
    
           
              <h2>
                Recntly Viewd Shows 
              </h2>
            
            <div className="page" style={{display:'grid'}}>
           
             <LeftOutlined 
              onClick={() => this.prevShow()} 
              className="col1 icon"
             />
    
                <div className="col2">
                  <div className={`cards-slider active-slide-${show.index}`}>
                    <div className="cards-slider-wrapper" style={{
                      'transform': `translateX(-${show.index*(100/shows.length)}%)`
                    }}>
                      {
                        shows.map(show => <img src={show.picture} alt='img' width={'150px'} height={'230px'}/>)
                      }
                    </div>
                  </div>
                </div>
                
                <RightOutlined 
                className="col3 icon"
                onClick={() => this.nextShow()} 
                />
                
                
            </div>
          </div>
        );
      }
}

export default Slider;