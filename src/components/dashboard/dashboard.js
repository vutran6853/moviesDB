import React, { Component } from 'react';
import css from './dashboard.scss';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        console.log(`this.props`, this.props)
        return (
            <div className='box1'>
              <p>Dashboard</p>
               
            </div>
        );
    }
}

export default Dashboard;