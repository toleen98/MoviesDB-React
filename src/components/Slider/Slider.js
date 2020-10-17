import React, {Component} from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './Slider.css'


class Slider extends Component {
  
        state = {
          shows:this.props.history,
          show:"",
          index :0
        }
  
    
    nextShow = () => {
      console.log(111, this.state.shows)
      if(this.state.index !==  this.state.shows.length-1){
        const newIndex = this.state.index + 1;
        this.setState({
          shows: this.props.shows.history,
          show:  this.props.shows.history[newIndex],
          index:newIndex
        })
      }
    }
    
    prevShow = () => {
      if (this.state.index !== 0){
        const newIndex = this.state.index - 1;
        this.setState({
          shows:this.props.shows.history,
          show: this.props.shows.history[newIndex],
          index: newIndex
        })
      }
    }

    render(){
        const {index, shows} = this.state;
        // const {shows} = 
        
       
        return (
          
          <div >
    
           
              <h2>
                Recntly Viewd Shows 
              </h2>
            
            {shows && <div className="page" style={{display:'grid'}}>
           
             <LeftOutlined 
              onClick={() => this.prevShow()} 
              className="col1 icon"
             />
    
                <div className="col2">
                  <div className={`cards-slider active-slide-${index}`}>
                    <div className="cards-slider-wrapper" style={{
                      'transform': `translateX(-${index*(100/this.props.history.length)}%)`
                    }}>
                      {
                        this.props.history.map(show => <img src={show.Poster} alt='img'  height={'200px'} key={show.imdbID}/>)
                      }
                    </div>
                  </div>
                </div>
                
                <RightOutlined 
                className="col3 icon"
                onClick={() => this.nextShow(index,shows)} 
                />
                
                
            </div>}
          </div>
        );
      }
}

Slider.propTypes = {
  shows: PropTypes.object.isRequired,

  
};
const mapStateToProps = state => ({
  shows: state.shows,
  
});
export default connect(
  mapStateToProps,
)(Slider);
