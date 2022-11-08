import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ViewEmployees from "./components/ViewEmployees";
import AddEmployee from "./components/AddEmployee";
import Header from "./components/Header";
import UpdateEmployee from "./components/UpdateEmployee";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
  <Routes>
    <Route path="/" element={<ViewEmployees />} />
    <Route path="add" element={<AddEmployee />} />
    <Route path="update/:id" element={<UpdateEmployee />} />
  </Routes>
    </BrowserRouter>
    
  );
}




