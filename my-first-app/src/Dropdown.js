import React, { useState } from 'react'
import DropdownItem from './DropdownItem'

export default function Dropdown() {

    const [cuisines, setCuisines] = useState([
        "Mexican", "Japanese", "Indian", "Malay"
    ])
    const [show, setShow] = useState(false)
    const [caption, setCaption] = useState('Select cuisine')

    const toggleShow = () =>{
        setShow(!show)
    }
    const changeCaption = (cuisine) =>{
        setCaption(cuisine)
        setShow(false);
    }

  let cuisineList =  cuisines.map((cuisine, i)=> <DropdownItem cuisine={cuisine} whenItemClick={changeCaption}></DropdownItem>)
  return (
    <div className="dropdown">
  <button onClick={toggleShow} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {caption}
  </button>
  <ul className={show?'dropdown-menu show': 'dropdown-menu'}>
    {cuisineList}
  </ul>
</div>
  )
}
