import React, {useEffect, useState} from 'react'
import Card from './Card';

export default function ViewCourses() {

  const [courses, setCourses] = useState([])  
 
  useEffect(() => {
    //
    fetch('http://localhost:5000/courses')
    .then(res => res.json())
    .then( data => {
        console.log(data);
        setCourses(data);
    })

  }, [])

  let courseList = courses.map((course,i)=> <Card key={course.id} course={course}></Card>)
  

  return (
    <div className="row">
            {courseList}
    </div>
  )
}
