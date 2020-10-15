import React, { Component } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';




class SearchInput extends Component {
    
    state = {
        showName: '1'
    }

    handleChange= (e) => {
        this.setState({showName: e.target.value});
    }
    

    render() {
        return(
            <div>
                
                <Input 
                size="large" 
                type='text'
                bordered={false} 
                placeholder="Search" 
               
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

export default SearchInput;