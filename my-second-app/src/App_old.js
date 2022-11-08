import logo from './logo.svg';
import './App.css';
import ViewEmployees from './components/ViewEmployees';
import AddEmployee from './components/AddEmployee';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="container row">
      <Login></Login>
      {/* <AddEmployee></AddEmployee>
      <hr/>
      <ViewEmployees></ViewEmployees> */}
    </div>
  );
}

export default App;
