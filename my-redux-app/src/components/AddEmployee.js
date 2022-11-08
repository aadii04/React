import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'

const AddEmployee = (props) => {
    const [name, setName] = useState('')
    const [salary, setSalary] = useState()

    const handleNameChange = (e) => {
        console.log('Change event.. ', e.target.value)
        setName(e.target.value)
    }
    const addEmployee = () => {
        console.log('Add employee.. ', name, salary)
        props.onAddEmployee({ name, salary })
    }

    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Name</span>
                <input type="text" value={name} onChange={handleNameChange} className="form-control" placeholder="Enter name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Salary</span>
                <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} className="form-control" placeholder="Enter salary" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <button onClick={addEmployee} className='btn btn-primary'>Add Employee</button>
            </div>
        </>


    )
}

// function mapDispatchToProps(dispatch) {
//     return({
//       sendTheAlert: () => {dispatch(ALERT_ACTION)}
//     })
//   }


const mapDispatchToProps = (dispatch) => {

    return ({
        onAddEmployee: (employee) => dispatch(actions.addEmployee(employee))
    })
}





export default connect(null, mapDispatchToProps)(AddEmployee);

