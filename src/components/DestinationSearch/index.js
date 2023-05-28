import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

const destinationSearch = probe => {
  const {destinationsList} = probe
  console.log(destinationsList)
}

class DestinationSearch extends Component {
  state = {destinationsList: destinationsList, userSearch: ''}

  onChangeSearchInput = event => {
    this.setState({
      userSearch: event.target.value,
    })
  }

  render() {
    const {userSearch, DestinationsList} = this.state
    const searchResults = DestinationsList.filter(eachUser =>
      eachUser.name.includes(userSearch),
    )
    return (
      <div className="bg-container">
        <h1 className="head">Destination Search</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={userSearch}
          icon="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
        />
        <ul>
          {searchResults.map(each => (
            <DestinationItem destinationsList={each} key={each.uniqueNo} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
