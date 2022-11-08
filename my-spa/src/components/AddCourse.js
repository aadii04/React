import React, { useState } from 'react'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import ToastHeader from 'react-bootstrap/ToastHeader'
import ToastBody from 'react-bootstrap/ToastBody'
export default function AddCourse() {

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [show, setShow] = useState(false);


    const addCourse = () => {
        fetch('http://localhost:5000/courses', {
            method: 'POST',
            body: JSON.stringify({ title, summary }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            console.log(res);
            return res.json()
        })
            .then(data => {
                setTitle('')
                setSummary('')
                setShow(true)
            })
    }

    return (
        <div>
<div
  aria-live="polite"
  aria-atomic="true"
  className="position-relative"
  style={{ minHeight: '150px' }}
>
  <ToastContainer position="top-end" className="p-3">
  <Toast onClose={() => setShow(false)} show={show} delay={10000} autohide bg="success">
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Notification</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Course Added Successfully!</Toast.Body>
            </Toast>
  </ToastContainer>
</div>
            
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Title</span>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} class="form-control" placeholder="Enter title" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Summary</span>
                <input type="text" onChange={(e) => setSummary(e.target.value)} value={summary} class="form-control" placeholder="Enter summary" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mb-3">

                <button onClick={addCourse} className='btn btn-primary'>Add Course</button>
            </div>
        </div>
    )
}
