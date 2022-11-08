
import React, { Component } from 'react'

export default class CardwithClass extends Component {

  constructor(){
    super();
    console.log('In constructor...');
    this.state = {text: 'ABC'}
  }

  componentDidMount() { 
    console.log('In componentDidMount...');
   }

   reverseText(){
     let reversedStr = this.state.text.split('').reverse().join('')
     this.setState({text: reversedStr})
     ;
   }

   shouldComponentUpdate(){
     console.log('In shouldComponentUpdate...')
     return true;
   }

   componentDidUpdate() { 
    console.log('In componentDidUpdate...');
    
   }

   deleteCourse(){
     fetch('http://localhost:8000/courses/' + this.props.id, {
       method: 'DELETE'
     }).then(res=>res.json())
     .then(body => console.log(body))
   }

  render() {
    console.log('In render...');
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" onClick={this.reverseText.bind(this)} className="btn btn-primary">{this.state.text}</a>
          <button  onClick={this.deleteCourse.bind(this)} className="btn btn-danger"> X </button>
        </div>
      </div>
    )
  }
}

