import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class WebLayout extends Component {
    render() {
        return (
            <div>
                <h1>Hi.</h1>
                <Outlet />
            </div>
        );
    }
}

export default WebLayout;