import React, {useState} from 'react'
import { useParams, useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
export default function UpdateCourse() {
    let params = useParams();
    let navigate = useNavigate();
  const [title, setTitle] = useState(params.title);
  const [summary, setSummary] = useState('');

    console.log(params)

  const updateCourse = () => {
      fetch('http://localhost:8000/courses/' + params.id, {
          method: 'PATCH',
          body: JSON.stringify({summary}) ,
          headers: {
              'content-type': 'application/json'
          } 
      }).then(res=> {
          console.log(res);
          if(res.status >= 400){
            console.log('Stay here and display a message')
          }
          else{
            navigate('/')
          }
        })
     
      .catch(err=>{
        console.log('In case of error' , err)
      })
  }

  return (
    <div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Title</span>
        <input type="text" onChange={(e)=> setTitle(e.target.value)}  value={title} disabled class="form-control" placeholder="Enter title" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Summary</span>
        <input type="text" onChange={(e)=> setSummary(e.target.value)}  value={summary} class="form-control" placeholder="Enter summary" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
           
            <Button onClick={updateCourse} variant='primary'>Update Course</Button>
        </div>
    </div>
  )
}
