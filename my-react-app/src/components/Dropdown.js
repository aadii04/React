import React, { useState } from 'react'

export default function Dropdown(props) {

    const [show, setShow] = useState(false);
    const [caption, setCaption] = useState(props.caption)

    const toggleShow = ()=>{
        setShow(!show);
    }

    const changeCaption = (item) =>{
        console.log('In change caption method', item);
        // props.caption = item;
        setCaption(item);
        setShow(false);
    }

    console.log(props.items)

   let itemsList =  props.items.map((item,i)=>  <li key={i}><a onClick={()=>changeCaption(item)} className="dropdown-item" href="#">{item}</a></li>)

  return (
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" onClick={toggleShow} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {caption}
  </button>
  <ul className={show?'dropdown-menu show': 'dropdown-menu'} aria-labelledby="dropdownMenuButton1">
   {itemsList}
  </ul>
</div>
  )
}
