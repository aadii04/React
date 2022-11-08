import React, {useState} from 'react'

export default function AddEmployee() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [salary, setSalary] = useState()

    const handleNameChange = (e) => {
        console.log('Change event.. ', e.target.value)
        setName(e.target.value)
    }
    const addEmployee = () => {
        console.log('Add employee.. ', name , salary)
        //http post
        fetch('http://localhost:8000/employees', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({name, salary})
        })
        .then(res =>{
            console.log(res);
            if(res.status == 201){
                setMessage('Employee added successfully!')
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
                <span className="input-group-text" id="basic-addon1">Salary</span>
                <input  type="number" value={salary} onChange={(e)=>setSalary(e.target.value)} className="form-control" placeholder="Enter salary" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
               <button onClick={addEmployee} className='btn btn-primary'>Add Employee</button>
            </div>
        </div>
    )
}
