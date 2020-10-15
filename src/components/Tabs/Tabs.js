import React from 'react';
import { Link } from 'react-router-dom';
import './Tabs.css'

const Tabs = () => {

    return (
        <div className="tab">
            <button><Link className="tablinks" to='/'>Movies</Link></button>
            <button><Link className="tablinks" to='series'>Series</Link></button>
            
            
        </div>
    
    );
        
}

export default Tabs; 