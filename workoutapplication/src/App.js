import './App.css';
import ViewWorkout from './Components/ViewWorkout';
import AddWorkout from './Components/AddWorkout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Components/Header';
import GraphView from './Components/GraphView';
function App() {
  return (
        <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/" element={<ViewWorkout />} />
        <Route path="add" element={<AddWorkout />} />
        <Route path="graph" element={<GraphView/>} />
        {/* <Route path="update/:id" element={<UpdateEmployee />} /> */}
      </Routes>
        </BrowserRouter>
  );
}

export default App;
