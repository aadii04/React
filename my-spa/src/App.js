
import './App.css';
import ViewCourses from './components/ViewCourses';
import AddCourse from './components/AddCourse';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import UpdateCourse from './components/UpdateCourse';

function App() {
  return (
    <div className="container">
      <Header/>
    <Routes>
        <Route path="/" element={<ViewCourses />} />
        <Route path="add" element={<AddCourse />} />
        <Route path="update/:id/:title" element={<UpdateCourse />} />
        <Route path="about" element={<About />} />
      </Routes>
      </div>
    // <div className="container">
    //   <AddCourse></AddCourse>
    //   <hr/>
    //   <ViewCourses></ViewCourses>
    // </div>
  );
}

export default App;


function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}