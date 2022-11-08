import * as actions from './actions'
// 2. Reducers to change the state

const initialState = {
    employees: [
       
    ]
  }
  const reducer = (state = initialState, action) => {
    console.log('in reducer...')
    switch (action.type) {
        case actions.FETCH_EMPLOYEES:
            return {employees: action.payload};
            break;
        case actions.ADD_EMPLOYEE:
            // console.log('employees...', state)
            let newEmployees = [...state.employees, action.payload]
            return {employees: newEmployees};
        case actions.DELETE_EMPLOYEE:
            // console.log('employees...', state)
            let remainingEmployees = state.employees.filter((emp) => emp.id != action.payload.id)
            return {employees: remainingEmployees};
        default:
            return state;
    }
  
  }

  export default reducer;