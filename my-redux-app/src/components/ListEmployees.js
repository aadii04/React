import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

 const ListEmployees = (props) => {

  // const [employees, setEmployees] = useState([{id: 1, name: 'Name2', salary: 99999}])
 

  const deleteEmployee = (id) => {
    // let fileteredEmployees = employees.filter((employee)=>employee.id != id)
    // setEmployees(fileteredEmployees)
  }

  let employeeList = props.employees.map((employee)=> {
    return (
        <li key={employee.id}>{employee.name}</li>
     )
  })
  
    
  return (
    <ul>
      {employeeList}
    </ul>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    employees: state.employees
  }
}

export default connect(mapStateToProps)(ListEmployees);


