import {Component} from 'react'

import './index.css'

const DestinationItem = probe => {
  const {destinationsList} = probe
  const {name, imgUrl} = destinationsList

  return (
    <li className="inner-container">
      <div>
        <img className="img" src={imgUrl} />
        <p className="para">{name}</p>
      </div>
    </li>
  )
}
export default DestinationItem
