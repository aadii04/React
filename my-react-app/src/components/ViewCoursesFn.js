import React, { useEffect, useState } from 'react'
import CardwithClass from '../CardwithClass';

export default function ViewCoursesFn() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/courses")
        .then(res=>res.json())
        .then(body=> {
            console.log(body)
            setCourses(body)
        })
    
    }, [])
    
    let listCourses = courses.map((course,i)=>{
        return(
            <CardwithClass id={course.id} key={i} title={course.title}/>
        )
    })

  return (
    <div>{listCourses}</div>
  )
}
