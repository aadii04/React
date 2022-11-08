import React, {useState} from 'react'

export default function AddWorkout() {
    const [name, setName] = useState('')
    const [cbpm, setcbpm] = useState('')
    const [message, setMessage] = useState('')
   // const [salary, setSalary] = useState()
    const [desc, setdesc] = useState('')
    const handleNameChange = (e) => {
        console.log('Change event.. ', e.target.value)
        setName(e.target.value)
        //setcbpm(e.target.value)
    }
    const AddWorkout = () => {
        console.log('Add workout.. ', name , cbpm , desc)
        //http post
        fetch('http://localhost:8000/workouts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({name , cbpm , desc})
        })
        .then(res =>{
            console.log(res);
            if(res.status == 201){
                setMessage('Workout added successfully!')
            }
        })
      
    }
    return (
        <div>
            {message && <div class="alert alert-success" role="alert">
  {message}
</div>}
            
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Name</span>
                <input  type="text" value={name} onChange={handleNameChange} className="form-control" placeholder="Enter name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Calories</span>
                <input  type="number" value={cbpm} onChange={(e)=>setcbpm(e.target.value)} className="form-control" placeholder="Enter Calories" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Description</span>
                <input  type="text" value={desc} onChange={(e)=>setdesc(e.target.value)} className="form-control" placeholder="Enter Description" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
               <button onClick={AddWorkout} className='btn btn-primary'>Add Workout</button>
            </div>
        </div>
    )
}
