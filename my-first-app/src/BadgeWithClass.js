import React, { Component } from 'react'

export default class BadgeWithClass extends Component {

    constructor(){
        super();
        console.log('in constructor...');
        this.state = {count: 0}
    }
    componentDidMount(){
        console.log('post initialization...');
    }

    increment() {
        console.log('click event fired')
        this.setState({count: this.state.count + 1})
    }

    shouldComponentUpdate(){
        return false;
    }
    render() {
        console.log('in render...');
        return (
            <button type="button" className="btn btn-primary" onClick={this.increment.bind(this)}>
                {this.props.caption} <span className="badge text-bg-secondary">{this.state.count}</span>
            </button>
        )
    }
}
