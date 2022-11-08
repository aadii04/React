import React, { Component } from 'react'
import CardwithClass from '../CardwithClass';

export default class ViewCourses extends Component {

constructor(){
    super();
    this.state={
        courses:[]
    }
}
componentDidMount(){
    fetch("http://localhost:8000/courses")
    .then(res=>res.json())
    .then(body=> this.setState({courses:body}))
}

  render() {

    let listCourses = this.state.courses.map((course,i)=>{
        return(
            <CardwithClass title={course.title}/>
        )
    })
    return (
      <div>{listCourses}</div>
    )
  }
}
