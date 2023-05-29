import './index.css'

const DestinationItem = probe => {
  const {destinationsList} = probe
  const {name, imgUrl} = destinationsList

  return (
    <li className="inner-box-container">
      <img className="img" src={imgUrl} alt={name} />
      <p className="para">{name}</p>
    </li>
  )
}
export default DestinationItem
