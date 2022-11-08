import React from 'react'

export default function Clock(props) {
  return (
    <h2>Time now is - {props.now.getHours()} : {props.now.getMinutes()}: {props.now.getSeconds()}</h2>
  )
}