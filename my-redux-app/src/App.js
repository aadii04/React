import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import ViewEmployees from './components/ViewEmployees';
import ListEmployees from './components/ListEmployees';

function App() {
  return (
    <>
      <AddEmployee></AddEmployee>
      <hr/>
      <ViewEmployees></ViewEmployees>
      <hr/>
      <ListEmployees></ListEmployees>
    </>
  );
}

export default App;
