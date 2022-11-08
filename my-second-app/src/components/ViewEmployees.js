import React, {useState, useEffect} from 'react'

export default function ViewEmployees() {

  const [employees, setEmployees] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/employees')
    .then(res=>res.json())
    .then((data)=> {
        console.log(data)
        setEmployees(data)
    })
  }, [])

  const deleteEmployee = (id) => {

    let fileteredEmployees = employees.filter((employee)=>employee.id != id)

    fetch('http://localhost:8000/employees/' + id, {
        method: "DELETE"
    })
    .then(res=>{
        console.log(res);
        return res.json();
    })
    .then((data)=> {
        console.log(data)
        setEmployees(fileteredEmployees)
    })
  }

  let employeeList = employees.map((employee)=> {
    return (
        <tr key={employee.id}>
      <th scope="row">{employee.id}</th>
      <td>{employee.name}</td>
      <td>{employee.salary}</td>
      <td><button onClick={()=>deleteEmployee(employee.id)} className='btn btn-danger'> X </button></td>
    </tr>
    )
  })
  
    
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Salary</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {employeeList}
  </tbody>
</table>
  )
}
