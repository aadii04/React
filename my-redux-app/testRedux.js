// Only redux code...
const redux = require('redux');

// 2. Reducers to change the state
const initialState = {
    employees: [
        { id: 1, name: "Test1", salary: 11111 },
        { id: 2, name: "Test2", salary: 22222 }
    ]
}
const reducer = (state = initialState, action) => {
    console.log('in reducer...')
    switch (action.type) {
        case 'FETCH_EMPLOYEES':
            return state.employees;
            break;
        case 'ADD_EMPLOYEE':
            // console.log('employees...', state)
            let newEmployees = [...state.employees, action.payload]
            return {employees: newEmployees};
        case 'DELETE_EMPLOYEE':
            // console.log('employees...', state)
            let remainingEmployees = state.employees.filter((emp) => emp.id != action.payload.id)
            return {employees: remainingEmployees};
        default:
            return state;
    }

}

// 1. Create Single Store
const store = redux.createStore(reducer)

store.subscribe(() => console.log(store.getState()))

// 3.  Dispatch Actions 

store.dispatch({ type: 'DELETE_EMPLOYEE', payload: { id: 1 } })
store.dispatch({ type: 'ADD_EMPLOYEE', payload: { name: 'Ravi', salary: 34343 } })
store.dispatch({type: 'FETCH_EMPLOYEES'})


// store.dispatch({type: 'FETCH_EMPLOYEES'})



