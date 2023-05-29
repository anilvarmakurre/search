import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {userSearch: ''}

  onChangeSearchInput = event => {
    this.setState({
      userSearch: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {userSearch} = this.state
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.includes(userSearch),
    )
    return (
      <div className="bg-container">
        <h1 className="head">Destination Search</h1>

        <form className="search-input">
          <input
            className="user-input"
            type="search"
            onChange={this.onChangeSearchInput}
            value={userSearch}
            placeholder="Search"
          />
          <button className="user-button" type="submit">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </button>
        </form>

        <ul className="inner-container">
          {searchResults.map(each => (
            <DestinationItem destinationsList={each} key={each.uniqueNo} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
