import React, { Component } from 'react';
import './App.scss'
import image from './static/temp.jpeg'

class App extends Component {
    render() {
        return (
            <div>
                <img  src={image}/>
            </div>
        )
    }
}

export default App;