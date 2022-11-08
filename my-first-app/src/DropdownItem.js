import React from 'react'

export default function DropdownItem(props) {
  return (
    <li><a className="dropdown-item" href="#" onClick={()=>props.whenItemClick(props.cuisine)}>{props.cuisine}</a></li>
  )
}
