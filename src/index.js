import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Clock extends Component {
    constructor (props){
        super(props); 
            this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    // componentWillUnmount() {
    //     clearInterval(this.timerID)
    // }

    tick() {
        this.setState({ date: new Date()})
    }

    render() {  
        return ( 
            <div>
                <h1>Timing</h1>
                <h2>The time is, {this.state.date.toLocaleTimeString()} </h2>
            </div>
         );
    }
}

ReactDOM.render(<Clock />, document.getElementById('root'))
 

    ReactDOM.render( <Clock date= {new Date()} />, document.getElementById('root'))

