import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSeries, getMovies } from "../actions/searchAction";
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';




class SearchInput extends Component {
    
    state = {
        showName: ''
    }

    
    handleChange= (e) => {
        this.setState({showName: e.target.value});
    }
    
    search = (e) => {
        if(e.key === 'Enter'){
            console.log('value');
            this.props.getSeries(this.state.showName)
            this.props.getMovies(this.state.showName)
        }
    }
    
    render() {
        return(
            <div>
                
                <Input 
                size="large" 
                type='text'
                bordered={false} 
                placeholder="Search" 
                onKeyDown = {this.search}
                prefix={<SearchOutlined />} 
                onChange={this.handleChange}
                style=
                {{
                   color:'white'
                }}
                
                />    
            </div>
        )
    }
}

SearchInput.propTypes = {
    getSeries: PropTypes.func.isRequired,
    getMovies: PropTypes.func.isRequired,
    shows: PropTypes.object.isRequired,

    
  };
  const mapStateToProps = state => ({
    shows: state.shows,
    
  });
  export default connect(
    mapStateToProps,
    { getSeries, getMovies }
  )(SearchInput);

