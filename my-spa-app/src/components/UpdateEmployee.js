import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

export default function UpdateEmployee() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [salary, setSalary] = useState()
    let params = useParams();

    console.log('update employee with id', params.id);


    useEffect(() => {
        fetch('http://localhost:8000/employees/' + params.id)
        .then(res=>res.json())
        .then((data)=> {
            console.log(data)
            setName(data.name)
            setSalary(data.salary)
        })
    }, [])
    

    const handleNameChange = (e) => {
        console.log('Change event.. ', e.target.value)
        setName(e.target.value)
    }
    const updateEmployee = () => {
        console.log('Add employee.. ', name , salary)
        //http post
        fetch('http://localhost:8000/employees/' + params.id, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({salary})
        })
        .then(res =>{
            console.log(res);
            if(res.status == 201){
                setMessage('Employee updated successfully!')
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
                <input  type="text" value={name} onChange={handleNameChange} className="form-control" placeholder="Enter name" disabled aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Salary</span>
                <input  type="number" value={salary} onChange={(e)=>setSalary(e.target.value)} className="form-control" placeholder="Enter salary" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
               <button onClick={updateEmployee} className='btn btn-primary'>Update Employee</button>
            </div>
        </div>
    )
}
