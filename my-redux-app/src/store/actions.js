export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES'
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE'
const baseUrl = 'http://localhost:8000/employees/'

export const deleteEmployee = (id) => {
    return (dispatch) => {
        fetch( baseUrl + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // Async explanation...
                dispatch({ type: DELETE_EMPLOYEE, payload: { id } })
            })
    }
    // return {type: DELETE_EMPLOYEE, payload: {id} }
}
export const addEmployee = (employee) => {
    return (dispatch) => {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(employee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // Async explanation...
                dispatch({ type: ADD_EMPLOYEE, payload: data })
            })
    }
    // return { type: ADD_EMPLOYEE, payload: employee }
}
export const fetchEmployees = () => {
    return (dispatch) => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // Async explanation...
                dispatch({ type: FETCH_EMPLOYEES, payload: data })
            })
    }
    // Http call to fake-server
    // return {type: FETCH_EMPLOYEES}
}

