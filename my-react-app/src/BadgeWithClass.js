
import React, { Component } from 'react'

export default class BadgeWithClass extends Component {

    constructor(){
        super();
        this.state = {count: 1000}
    }

    incrementCount(){
        let newCount = this.state.count + 1;
        this.setState({count: newCount})
    }

  render() {
    return (
        <button type="button" onClick={this.incrementCount.bind(this)} className="btn btn-primary">
        {this.props.caption} <span className="badge badge-light">{this.state.count}</span>
        </button>
    )
  }
}


